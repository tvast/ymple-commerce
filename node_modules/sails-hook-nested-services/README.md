# sails-hook-nested-services
a `sails.js` hook for loading services defined in subdirectories.


## Install
```javascript
npm install --save sails-hook-nested-services
```


## Purpose
By default, sails only loads top level services. This hook provides functionality for loading nested services.
```javascript
// in /api/services/path/to/service.js
module.exports = {
    sayHello: function() {
        sails.log.silly('Hello!');
    }
};


// and then in one of your controllers
module.exports = {
    action: function(req, res) {
        sails.services['path/to/service'].sayHello();
        res.ok();
    }
}
```


## Testing
run all tests  
```javascript
npm test
```

run coverage
```javascript
grunt coverage
```


## Contributing
1. [Fork it](https://github.com/cludden/sails-hook-nested-services/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
Copyright (c) 2016 Chris Ludden.
Licensed under the [MIT license](LICENSE.md).
