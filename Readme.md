#Sauron
Sauron is a user tracker  which for a defined set of actions will assign appropriate score. Each user will have a level based on the provided score.

Simple use-case would be, assign a score of “1” for every time a user opens his dashboard. Assign a score of say “5” for each article a user publishes.  Each time these actions are performed Sauron will track it and update the user’s score.

Users with higher score are your power users that actively engage with your website or a product.

The app works only if use use Webiny platform and the User entity provided with the platform. It’s fine if you have extended the entity with your own, it should still work.

Sauron has 3 main concepts:
* Rules
* ScoreCard
* Tracker

## Rules
They describe an action a user can perform. Each rule has a name, description, score and a slug.

For each time a user performs this action, the defined score amount will be assigned to his total score.

## ScoreCard
This is your core view, it shows you all your registered users ranked by their level.

The level is based on the power of 2.  i.e.
Say level 3, that equals to 2^3, which equals to score of 8, and since previous level equals to score of 4 (2^2), the range for level 3 is score of 5 - 8.
* Level 4 (2^4): 9 - 16
* Level 5 (2^5): 17 - 32
* Level 6 (2^6): 33 - 64
…you get the point

Score card shows you the total user score, as well as a breakdown of which actions he performed, how many times, when was the last time he performed that action and the total score for that action.

## Tracker
Every rule has a slug, using that slug you need to call the tracker in your app, once the action has been performed. Tracker is a client side JS class which has to be declared as a dependency to your Webiny app.

### Declaring a dependency
`Sauron.Shared` is the dependency you need to declare

Inside your app template add it to the app list in the header:
```html
<script type="text/javascript">
    var Webiny = {apps: ['Your.App', 'Sauron.Shared'], router: {baseUrl: '/', title: '%s | Webiny'}};
</script>
```

As well as inside the body:
```
{webiny apps="Your.App,Sauron.Shared"}
```

### Calling the tracker
Inside your code, create an instance of the `Eye` class and call the `glance` method giving the rule slug as the parameter. Here is sample:
```js
import Webiny from 'Webiny';

const eye = new Webiny.Sauron.Plugins.Eye;
eye.glance('user-profile-page');
```

Sauron will take of the rest.

## License and Contributions

Contributing > Feel free to send PRs.

License > [MIT](LICENSE)