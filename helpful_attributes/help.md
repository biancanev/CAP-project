# How to Edit using HTML
### About HTML
#### How to use HTML
HTML is organized in what is called *tags*. For example, to use the *p* tag, type *<p>* to start. Likewise if you want to use the *div* tab, 
you would type *<div>*
#### HTML attributes
Some HTML tags do not cover all the information needed for the computer to create the desired output, therefore you would add an attribute 
to the HTML tag. Standard Sytax is this:
```html
<tag attribute="value">Input</tag>
```
Common attributes are:
  * class
  * id
  * title
 These are diplayed as:
 ```html
 <p class=""></p>
 <p id=""></p>
 <p title=""></p>
 ```
 at bare minimum.
### Text
HTML text can be sorted into sizes using the *h* tags. The tags are ordered from largest to smallest, h1 to h6, respectively. For example:
```html
 <h1>H1</h1>
 <h2>H2</h2>
 <h3>H3</h3>
 <h4>H4</h4>
 <h5>H5</h5>
 <h6>H6</h6>
 ```
will produce:
# H1
## H2
### H3
#### H4
##### H5
###### H6
There is also another way to produce text - the *p* tag. It produces standard, paragraph sized text:
 ```html
 <p>P</p>
 ```
 will produce:
 P
### Links
Another useful tag to know is the tag that creates links, the *a* tag. Standard syntax is:
```html
 <a href="webURL">Text Displayed</a>
 ```
 What does this mean? Let's say that you want to create a link to go to [google](https://www.google.com). First you would start off by using the *a* tag.
```html
 <a></a>
 ```
 Now how do you link that to another page? Luckily, HTML covers that for you with the *href* attribute(for more information go to our attribute section).
```html
 <a href=""></a>
 ```
Now, we want the link to redirect the user to google, or more specifically, [https://www.google.com]
