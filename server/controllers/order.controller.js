const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Razorpay = require('razorpay');

const devenv = require('../devenv');

let instance = new Razorpay({
    key_id: process.env.KEY_ID || devenv.LOCAL_key_id,
    key_secret: process.env.KEY_SECRET || devenv.LOCAL_key_secret,
});

module.exports.getOrders = (req, res, next) => {
    try {
        Order.find().populate('user', 'fullName email').sort({
            'createdAt': -1
        }).then(orders => {
            if (!orders || orders.length < 1) {
                return res.status(404).json({
                    success: false,
                    message: 'No orders found.'
                });
            } else {
                return res.status(200).json({
                    success: true,
                    orders: orders
                });
            }
        }).catch(err => {
            console.log(err)
            return next(err);
        })
    } catch (err) {
        return next(err);
    }
};

module.exports.getUserOrders = (req, res, next) => {
    try {
        Order.find({user: req._id}).sort({
            'createdAt': -1
        }).then(userOrders => {
            if (!userOrders || userOrders.length < 1) {
                return res.status(404).json({
                    success: false,
                    message: 'No orders found.'
                });
            } else {
                return res.status(200).json({
                    success: true,
                    orders: userOrders
                });
            }
        }).catch(err => {
            return next(err);
        })
    } catch (err) {
        return next(err);
    }
};

module.exports.getOrder = (req, res, next) => {
    try {
        Order.findById(req.params.id)
        .populate('user', 'fullName email')
        .then(order => {
            if (!order || order.length < 1) {
                return res.status(404).json({
                    success: false,
                    message: 'No order found.'
                });
            } else {
                return res.status(200).json({
                    success: true,
                    order: order
                });
            }
        }).catch(err => {
            return next(err);
        })
    } catch (err) {
        return next(err);
    }
};

module.exports.postOrder = async (req, res, next) => {
    try {
        let options = {
            amount: +req.body.budget * 100, // amount in the smallest currency unit
            currency: "INR",
            payment_capture: +req.body.budget * 100
        };

        instance.orders.create(options, (err, order) => {
            if (err) {
                return next(err);
            }
            if (order) {
                return res.status(200).send({
                    success: true,
                    message: 'Creating order',
                    orderId: order.id,
                    value: order,
                    userId: req._id,
                    key: process.env.KEY_ID || devenv.LOCAL_key_id
                });
            }
        });

        // const order = new Order({
        //     razorPayOrderId: req.body.razorPayOrderId,
        //     orderDetails: {
        //         paymentStatus: 'Success',
        //         payableTotal: req.body.payableTotal,
        //         planPrice: req.body.planPrice,
        //         youtubeLink: req.body.youtubeLink,
        //         targetAndWants: req.body.targetAndWants,
        //         location: req.body.location,
        //         gender: req.body.gender,
        //         age: req.body.age,
        //         country: req.body.country,
        //         videoCategory: req.body.videoCategory,
        //         keywords: req.body.keywords,
        //         budget: req.body.budget,
        //         views: req.body.views
        //     },
        //     user: req._id
        // });

        // order.save().then((savedOrder) => {
        //     if (!savedOrder) {
        //         return res.status(503).send({
        //             success: false,
        //             message: 'Order can not be placed! Please try again.'
        //         });
        //     }
        //     return res.status(201).send({
        //         success: true,
        //         message: 'Order placed succussfully!',
        //         order: savedOrder
        //     });
        // }).catch(err => {
        //     return next(err);
        // })
    } catch (err) {
        return next(err);
    }
};

module.exports.postOrderResponse = async (req, res, next) => {
    try {
         const order = new Order({
            razorPayOrderId: req.body.razorPayOrderId,
            orderDetails: {
                paymentStatus: 'Success',
                payableTotal: req.body.payableTotal,
                planPrice: req.body.planPrice,
                youtubeLink: req.body.youtubeLink,
                targetAndWants: req.body.targetAndWants,
                location: req.body.location,
                gender: req.body.gender,
                age: req.body.age,
                country: req.body.country,
                videoCategory: req.body.videoCategory,
                keywords: req.body.keywords,
                budget: req.body.budget,
                views: req.body.views
            },
            user: req._id
        });

        order.save().then((savedOrder) => {
            if (!savedOrder) {
                return res.status(503).send({
                    success: false,
                    message: 'Order can not be placed! Please try again.'
                });
            }
            return res.status(201).send({
                success: true,
                message: 'Order placed succussfully!',
                order: savedOrder
            });
        }).catch(err => {
            return next(err);
        })
    } catch (err) {
        return next(err);
    }
}

module.exports.updateOrderStatus = (req, res, next) => {
    try {
        Order.findByIdAndUpdate(req.params.id).then((founededOrder) => {
            if (!founededOrder) {
                return res.status(404).send({
                    success: false,
                    message: 'Category not found!'
                });
            } else {
                    founededOrder.status = req.body.status;
            };

            founededOrder.save().then((savedOrder) => {
                if (!savedOrder) {
                    return res.status(503).send({
                        success: false,
                        message: 'Order status can not be updated! Please try again.'
                    });
                }
                return res.status(201).send({
                    success: true,
                    message: 'Order status updated!',
                    order: savedOrder
                });
            }).catch(err => {
                return next(err);
            })
        }).catch(err => {
            return next(err);
        })
    } catch (err) {
        return next(err);
    }
};

module.exports.deleteOrder = (req, res, next) => {
    try {
        Order.findByIdAndRemove(req.params.id).then(async order => {
            if (!order) {
                return res.status(404).send({
                    success: false,
                    message: 'Order not found!'
                });
            };
            await order.orderItems.map(async orderItem => {
                await OrderItem.findByIdAndRemove(orderItem);
            });
            return res.status(201).send({
                success: true,
                message: 'Order deleted succussfully!'
            });
        }).catch(err => {
            return next(err);
        });
    } catch (err) {
        return next(err);
    };
};



// order example 

// {
//     "orderItems": [
//         {
//             "quantity": 3,
//             "productId": "63f21a57de1e5160ff23a9cc"
//         },
//         {
//             "quantity": 2,
//             "product": "63f21ba24bd1593b2ca48add"
//         }
//     ],
//     "shippingAddress1": "Address 1",
//     "shippingAddress2": "Address 2",
//     "city": "Mohali",
//     "zip": "123456",
//     "country": "India",
//     "phone": "9898989898"
//     "user": "63f24bde043f5acaf6b8bb27"
// }