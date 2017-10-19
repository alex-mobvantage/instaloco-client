# InstaLoco

InstaLoco is an iOS app for gaining more likes and followers on Instagram. Users like pictures and follow other InstaLoco users to receive coins which they can redeem for gaining likes and followers on their own pictures and account. Users can also purchase these coins directly as an in-app-purchase.

The app was published in October, 2016 but was sadly removed from the app store after about 6 months when Apple did their recent sweep/cleanup of the store.

The architecture consists of a React Native app with Redux for state management. I used CodePush to publish bug fixes and small feature updates without needing formal appstore review. The backend is a simple NodeJS express app with PostgreSQL database, serving up a JSON API. Communication with Instagram's API was achieved using the [instagram-private-api](https://github.com/huttarichard/instagram-private-api) library - likely the reason the app was ultimately removed from the store.

I'm publishing this here to serve as a pretty complete sample architecture for a React Native/Redux app. Hopefully you'll learn something from it!

## Screenshots

![Earn coins](https://lh6.googleusercontent.com/vIcZohVdTsneMSlspodpD0aHhZRS7Dd1YP-ubzGrxwGG3GzMpCGbCrQhE0w6Cq1f9lPYtjDp99BAhhc=w800-rw)

![Get followers](https://lh6.googleusercontent.com/dzPJlV018xzhG_B2Qbq0srvUeCEBh9oxuVlqC06iR6tpKcK8KljX9JH_Y0dCVuqJIESpeJDK4Jsffgw=w800-rw)

![Free coins](https://lh3.googleusercontent.com/oaatKDNtlQm28jm68_jESAQd-UwucbPPoqhZ4bY45I6EuZYLU_pbl6iWKGgMzLtYlk9BZKK6HuHwbhc=w800-rw)