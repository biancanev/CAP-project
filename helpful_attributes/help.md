# How to Edit using HTML
### About HTML
#### How to use HTML
HTML is organized in what is called *tags*. For example, to use the *p* tag, type ```<p>``` to start. Likewise if you want to use the *div* tab, you would type ```<div>```. For example:
 ```html
 <p></p>
 <div><div>
 ```
As you can see from the example, there are 2 types of tags, a start(```<tag>```) and end(```</tag>```). There are many things you can do with these tags. How? Sometimes, we put things in between the start and end tag like this:
```html
  <p>Input</p>  
```
There are other things you can do with HTML tags, such as attributes, which we will talk about below.
#### HTML attributes
Some HTML tags do not cover all the information needed for the computer to create the desired output, therefore you would add an attribute to the HTML tag. Standard Sytax is this:
```html
<tag attribute="value">Input</tag>
```
Common attributes are:
  * class
  * id
  * title
 
 These are diplayed as:
 ```html
 <p class="className"></p>
 <p id="idName"></p>
 <p title="titleName"></p>
 ```
 at bare minimum. You can also have multiple attributes:
 ```html
<p class="className" id="idName" title="titleName"></p>
```
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
 
 Congratulations, we can now put text on our websites!
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
Now, we want the link to redirect the user to google, or more specifically, [https://www.google.com](https://www.google.com). Therefore, we type inside the quotes the URL.
```html
 <a href="https://www.google.com"></a>
 ```
Great! Now we have a link that can redirect the user to google, however before you get too excited, the user can't see it. That's because we didn't give the user any text to click on. Therefore, we add our desired text inside the *a* tag.
 ```html
 <a href="https://www.google.com">Google</a>
 ```
 This will produce:
 
 [Google](https://www.google.com)
 
 Tada! We have created our first link!
