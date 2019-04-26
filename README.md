# Eva

## About
Eva is robotic test assistant which makes creating e2e tests easy for everyone. Only few methods are accessible that will cover around 90% of cases. It can be used by specialists without programming skills, but knowing only few basic functions like:

```
.on(selector) - focus only on particuar element chosen by selector
.onMany(selector) - focus on many elements chosen by selector
.type(text) - type some value to particular element, for example eva.on('#input-login).type("my_login");
.pressKey(key) - press keyboard key
.click() - click on particular element, for example eva.on('#submit-button).click();
.canSee(text) -verify if Eva can see text on page or partiular element

and few (but only few :) ) more
```

Thanks to Eva and its few simple commands you can introduce someone into simple e2e tests without knowing protractor


## Install
Install with npm:

```$ npm install protractor-eva```

## Usage

Click on login button in top menu then login -> log in -> check if has access to user settings
```ts
    eva.isOn("/");
    eva.on("#top-menu).on(".login").click();
    eva.on("#input-email").type("Test@test.pl");
    eva.on("#input-password")
      .type("testpsw")
      .pressKey(protractor.Key.ENTER);
    eva.canSee("Logged successfully");
    eva.on("#my-profile").click();
    eva.on("#settings").canSee("Change email");
    
```

For all elements on a list check that:
1. Text 'John' exists on any item
2. Element with class .mat-content exists for all elements
3. All elements has 'Id' text
4. "Janice" text is not on all elements on a list
5. "Error" texts doesn't appear on any element
6. There is 4 elements on list
7. On second element we can see "Jennifer" text -> click on it

```ts
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
        


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, please create an issue.

## Author
Przemek Struciński (delprzemo)

github/delprzemo
License
Copyright © 2016, Przemek Struciński. Released under the MIT license.
