#DOM Manipulation Exercise

As always, fork and clone this repo.  Submit the link to your fork when you're done.

###Checkerboard

On the master branch, write code to generate a checkboard pattern as seen below:

![Screen Shot 2015-05-12 at 9.28.07 PM.png](https://draftin.com:443/images/29112?token=H321vjS2Gw41xPTjzAyQEaanRGjm6cAAskSoQgbnGA3El3ojEIP8BRWE8sjyUGBBkd7o1MKNRCpIzYc32qvwsyQ)

**The Rules**

Your `index.html` must look like this:

```
<!DOCTYPE html>
<html>
<head>
	<title>Checkerboard</title>
</head>
<body>
	<script type="text/javascript" src="script.js"></script>
</body>
</html>
```

You are not allowed to add any other elements to the html file, which means that you must create all the tiles dynamically.  Same goes for CSS: no CSS in the html file or in a separate stylesheet.  You must set all the style properties using Javascript.

**Hints**

* Each tile should be a `div`
* Each tile's width is `11.1%`
* Set each tile's `float` property to `left`
* Each tile's paddingBottom is `11.1%`

**JUST TO REITERATE, YOU WILL NOT WRITE ANY HTML OR CSS FOR THIS EXERCISE.  ONLY JS!!!**

###Random Colors

On a new branch called `randomcolors`, implement the following changes:

1. Instead of being either red or black, each tile should be a random color.  How do you generate random colors?  You can use RGB or Hexadecimal as your color system.

![Screen Shot 2015-05-12 at 10.19.59 PM.png](https://draftin.com:443/images/29115?token=g0Da9o1sdpfxhhNjHJVQ2578h9pJatEhrE_4ysca-j-FXB3EX58CGJmXZT0087rlBo22A_MgqflTfIxhMsUfuV8) 

###Gradient

On a new branch called `gradient`, write code to color the tiles using some sort of gradient.  It does not need to look exactly like the image below, but it should have some sort of increasing/decreasing color values.

![Screen Shot 2015-05-12 at 10.17.24 PM.png](https://draftin.com:443/images/29114?token=rfd8xRPfnvVY9rkIhhzxIl8b3vWWgz6_sprT3mzf2K2uvZ39L9w6pHD4JlE8BxU6vmkDCTmxzm0kw7m2gbSNhBw) 

###Flashing Colors

On a new branch called `flashing`, write code to change each tile's color to a new random color every 2 seconds. 

###Bonus: Audio

Get some audio playing to accompany your trippy visuals, using only JS.  No editing the HTML!