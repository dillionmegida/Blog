---
title: Understanding event.target and Use Cases
date: 2019-10-15
readTime: 3 mins
pageDescription: >-
  Target is a property of an event which is a reference to the element upon which the event was fired. This property aids us in easily accessing the properties of that given element.
pageKeywords: 'javascript, event, event.target, target, events, javascript events'
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1571097103/images/blogs_cover/understanding-event.target_o5l0cq.jpg
tags: ["javascript"]
---
Before explaining the target property itself, let's get to understand the Event Interface in Javascript

# Javascript Event Interface

According to [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event),

> The Event interface represents an event that takes place in the Document Object Model \[DOM].

Events refer to happenings in the DOM from the loading of a page to the navigation to another page or the closing of a page. These events can occur automatically or can be triggered by user actions.

Examples of events include `click` (pressing mouse button), `change`(e.g an input field changing), `load` (when an object has been loaded, often used with the body element) and so many more.

Events also possess properties that provide more information about that event. Find a list of those properties in [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event#Properties).

Among these properties, I'd be explaining the `target` property, which can be accessed like this, `event.target`

## `event.target`

`target`, is a property of an event which is a reference to the element upon which the event was fired. Just as 'target' means 'aiming at something', it's used to 'aim' at that particular element.

This property gives us access to the properties of that element.

**NOTE that** this property is different from `currentTarget`. `currentTarget` returns a reference to the actual object that fired the event while `target` returns a reference to the object of which the event was fired upon regardless of the element that listened to the event.<br/>
Check out the pen below to understand the difference better.

<iframe height="419" style="width: 100%;" scrolling="no" title="currentTargetVStarget" src="https://codepen.io/Dillion/embed/MWWyvLZ?height=419&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Dillion/pen/MWWyvLZ'>currentTargetVStarget</a> by Dillion Megida
</iframe>

Since the target property has given us access to the element, we could then read some of the properties (which are the attributes) and also display them somewhere else. 

## `event.target` use cases
#### 1. Getting properties
The most common use case is in input elements.
For example, a `change` event is listened to on an input field. This event is fired once there is a change in the contents of that input (which could be a change in value). The value of the input could then be transformed or displayed somewhere else.

Check out this pen - A simple program that displays the value as it changes.

<iframe height="419" style="width: 100%;" scrolling="no" title="event.target.value" src="https://codepen.io/Dillion/embed/MWWyEXY?height=419&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Dillion/pen/MWWyvLZ'>event.target.value</a> by Dillion Megida
</iframe>

Let's analyze the code used.
- The reason I added the event listener to the input instead of the container is that I do not want to listen to every change event on the container. Other change events could occur in it such as `select` tags or `textarea`. Hence, I listened to only change events in the input tag.
 
- I set variable references to the input tag and the initially empty h1 tag.

- I listened for every change event on the input and applied a function that sets the value of the input to the contents of the h1 tag.

- I used the `target` property to target the input.

#### 2. Setting properties
You could also use the property to set attributes of an element. For example, the class attribute. Let's say you have a class attribute of 'red' which changes the text color of elements to red, you could have this;
```html
<style>
.red {
    color: red;
}
</style>
<p id='toBeChanged'>My color can change</p>
<script>
  function changeColorToRed(event) {
    event.target.className= 'red';
  }
  let toBeChanged = document.querySelector('toBeChanged');
  toBeChanged.addEventListener('click', changeColorToRed, false);
</script>
```

If you tried this code, you'd notice that when you click on the paragraph, its color changes to red.

There are other use cases that could be made out of this property. From the above examples which showed how to get properties and set properties of elements which events were fired on, I believe you'd be able to create more interactive applications.

## Summary
The `target` property of events allows us to access the element of which the event was fired and its respective attributes. We can further get the properties or even set them.

Thanks for reading : )
