# object-pick-ts


## Install
Install with npm:

```$ npm install protractor-eva```

## Usage

```ts

    // Test log-in functionality
    eva.isOn("/");
    eva.on("#top-menu).on(".login").click();
    eva.on("#input-email").type("Test@test.pl");
    eva.on("#input-password")
      .type("testpsw")
      .pressKey(protractor.Key.ENTER);
    eva.on("#my-profile").click();
    
    // Test list
    eva.onMany(by.name("my-list"))
      .canSeeOnAny("John")
      .canSeeOnAll(by.css(".mat-content"))
      .canSeeOnAll("Id")
      .canNotSeeOnAll("Janice")
      .canNotSeeOnAny("Error")
      .canCount(4)
      .onSingle(2)
         .canSee("Jennifer");
         .click();
```
        
## About
Eva is robotic test assistant which makes creating e2e tests easy for everyone. Only few methods are accessible that will cover around 90% of cases. It can be used by specialists without programming skills

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, please create an issue.

## Author
Przemek Struciński (delprzemo)

github/delprzemo
License
Copyright © 2016, Przemek Struciński. Released under the MIT license.
