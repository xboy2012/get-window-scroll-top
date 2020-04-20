# get-window-scroll-top

get window's scroll top cross browser

## Install

```
npm install get-window-scroll-top
```


## Usage

```js
import getWindowScrollTop from 'get-window-scroll-top'

const scrollTop = getWindowScrollTop()
// value: 1000
```

## Why use this module?

To get window's scroll top, you must consider the compatibility of multiple browsers.

Then you have to use `feature detect`, which checks the following scenes:

1. `window.pageYOffset`
2. `document.body.scrollTop`
3. `document.documentElement.scrollTop`

and handle the edge cases where some of them are invalid.

One of the common implements is as follows:

```js
() =>  window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
```

It seems that it's just one line to get window's scroll top. However, the outcome is obvious:

+ Missing edge cases when `window`/`document`/`document.body`/`document.documentElement` is missing, making the code above to throw.
+ Unnecessary conditional checks **`DURING EVER CALL`**. You may find it unnoticeable, but please consider invoking the function in window's `scroll` event listener, it might a waste of cost.

To overcome the above details, we invent this module.

We use feature detect including edge cases, once the code find a way to access the `scrollTop` value properly, future call to the function will **`JUST INVOKE THE EXTACT IMPLEMENT`** without any unnecessary checks. In this way, we gain the best performance as possible.

The source code might seem a little longer, but after `treeshaking`/`uglify`, it's nothing to worry about, just several bytes increment.
