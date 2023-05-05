const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Razorpay = require('razorpay');
const User = mongoose.model('User');

const devenv = require('../devenv');

const stripe = require('stripe')(process.env.STRIPE_SECRET || devenv.STRIPE_SECRET);

// const instance = new Razorpay({
//     key_id: process.env.KEY_ID || devenv.LOCAL_key_id,
//     key_secret: process.env.KEY_SECRET || devenv.LOCAL_key_secret,
// });

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
        Order.find({
            user: req._id
        }).sort({
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
        const lineItems = [{
            price_data: {
                currency: 'INR',
                product_data: {
                    name: req.body.orderBody.youtubeLink,
                },
                unit_amount: +req.body.orderBody.budget * 100
            },
            quantity: 1
        }]

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: req.body.domain + '/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: req.body.domain + '/advertiser/allvideocheckout',
        });
        const order = new Order({
            orderDetails: {
                paymentStatus: 'Pending',
                payableTotal: req.body.orderBody.budget,
                planPrice: req.body.orderBody.budget,
                youtubeLink: req.body.orderBody.youtubeLink,
                targetAndWants: req.body.orderBody.targetAndWants,
                location: req.body.orderBody.location,
                gender: req.body.orderBody.gender,
                age: req.body.orderBody.age,
                country: req.body.orderBody.country,
                videoCategory: req.body.orderBody.videoCategory,
                keywords: req.body.orderBody.keywords,
                budget: req.body.orderBody.budget,
                views: req.body.orderBody.views
            },
            orderSessionId: session.id,
            user: req._id
        });

        order.save().then(async (savedOrder) => {
            if (!savedOrder) {
                return res.status(503).send({
                    success: false,
                    message: 'Order can not be placed! Please try again.'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Creating order',
                sessionId: session.id
            });
        }).catch(err => {
            return next(err);
        })
    } catch (err) {
        return next(err);
    }
};

module.exports.postOrderResponse = async (req, res, next) => {
    try {
        const user = await User.findById(req._id);
        const order = await Order.findOne({
            orderSessionId: req.body.orderSessionId
        });
        if (!order || !user) {
            return res.status(404).json({
                success: false,
                message: 'Order id or User not found'
            })
        }
        order.orderDetails.paymentStatus = "Success";
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