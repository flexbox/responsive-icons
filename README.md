#<a href="http://responsiveicon.fr">Responsive icon</a>

A design pattern with html unicode symbols usefull in webdesign.<br>
The advantages of using entities rather than images :

1. It loads fast because it is text base.
2. Scalable according to font size.
3. Easy to change color and sizing.

I have used these website :

w3c website for <a href="http://dev.w3.org/html5/html-author/charref">html symbols</a><br>
The documentation of all <a href="http://www.fileformat.info/info/unicode/index.htm">unicode characters</a><br>
<a href="http://goetter.fr/unicode/">Icones web unicode</a> by Raphaël Goetter


##How it works ?

I use the css3 pseudo-element <code>::before</code> and <code>::after</code> for include icons<br>
If you want to use the class sytem simply add the file <code>symbol.css</code> in your project<br>

##Compatibility

Tested on
- PC (windows)

Browser checklist
- Firefox 1.5+
- Chrome  yes
- Safari  4.0
- Opera   7+
- IE      9+
If you want support for IE8 you can use the css2 pseudo-element <code>:before</code>

##Twitter account

Keep up to date on announcements and more by following David on Twitter, <a href="http://twitter.com/_flexbox">@_flexbox</a>.


##ToDo

Add Mobile first view<br>
Add more icons