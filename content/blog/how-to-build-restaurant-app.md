---
date: 2020-08-08
title: 'Building Uila: Restaurant App'
---


- Restaurant App
- At the start, I want to make something like gofood or grabfood, but I realized later on that implementing google maps most likely take more than a week. So I leave that part out.
- At the start, I'm using rails for the backend although it fast to build a backend in ruby, when it comes to deployment there is a challenge. If I use a free version of its really slow, and if I upgrade to premium it's really expensive. I'm considering to use AWS, but then I remember in my previous job how painful it is to set up the environment correctly without docker. Then I discover JAM STACK. Netlify provides a generous free tier and if I need to upgrade, the pricing is reasonable. Also one of the benefits of using netlify there is netlify dev, which is a really great feature where you can test your app live on draft URL, so what you see is what you get. No more 'But it's working on my end' and you don't need docker.
- I would like to focus more on the front end if i can.

User Stories

1. User can sign up & sign in
2. User can add product to cart
3. User can change product quantity inside cart
4. User can delete product from cart
5. User can add address
6. User can select address for delivery
7. User can pay for the order via Stripe
8. User can view previous order

- I decide to use MongoDB for this project, i've tried to use postgresql with sequelize but its not as smooth as i want it to be. If you have no choice but to use postgresql, i  recommend to use rails with it. Even though MongoDB is quite good it also comes with drawback.Its easy to make mistake in MongoDB, I myself forgot add one line and the user can see and modify other user cart, which is really bad. Just be careful and add some test and you will be fine.
- I decide to use the Netlify function which is just an AWS lambda function. You can try to set up AWS lambda directly if you want. You can even use express via serverless-http, so you can get all the benefit of serverless without the need to learn everything from scratch. Oh and you can use the express middleware that you usually use, I find express-validator especially useful.

So the journey began,

Roadblock number 1,

- Timeout, one of the tutorials I find on how to use MongoDB with express in serverless recommending to connect and reconnect to the DB for every request. It's quite hard find resources for what I want, react+netlify function+express+mongodb is really specific. I think it's worth it though, because of the improved workflow and I can use javascript both on the front end and backend, further decreasing context switching.   Later I found out that its what has been causing my app to timeout for every 2nd request. I've done some research and found out that its an anti-pattern, lesson learned.

[https://stackoverflow.com/questions/52991359/topology-was-destroyed-when-using-mongodb-with-native-driver-and-express-js](https://stackoverflow.com/questions/52991359/topology-was-destroyed-when-using-mongodb-with-native-driver-and-express-js)

Roadblock number 2,

- You cant use multer or formidable for image upload in serverless-http. I'm stuck on this one for more than 3 days.

Roadblock number 3,

- This one is not a big deal, i just need to figure out how to implement @cart_items.to_json(:include => [:product], :except => [:created_at, :updated_at]) this in express & mongoose.

Resources:

[https://youtu.be/WTUYem2IxLA](https://youtu.be/WTUYem2IxLA)

[https://www.udemy.com/course/mern-stack-front-to-back/learn/lecture/10055150#overview](https://www.udemy.com/course/mern-stack-front-to-back/learn/lecture/10055150#overview)

[https://css-tricks.com/video-screencasts/160-the-all-powerful-front-end-developer/](https://css-tricks.com/video-screencasts/160-the-all-powerful-front-end-developer/)

1. Navbar
2. Footer
3. Responsive Card
4. Skeleton Screen
5. Login Screen