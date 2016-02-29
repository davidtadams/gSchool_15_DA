# Binary

Let's learn to count like computers.

Computers only use the numbers zero and one. Everything that you see or hear on the computer, every interaction, click, scroll and computation is stored using just those two numbers!

Numeric values can be represented in binary.  The binary value `10`, is 2 in base 10 (base 10 is how we think about numbers normally).  `10` represents 2 because the left most value is 1 * 2^1 and the 0 is equivalent to 0 * 2^0. In other words: `10 (binary) = 1 * 2^1 + 0 * 2^0 = 2 (base 10).

Now you should get the following joke:

> There are 10 types of people in the world, those who understand binary and those who don't.

Another example would be `101` = 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 5 (base 10).

The chart below shows the binary value `01000111`:

<table>
<tr>
  <td>Position</td>
  <td>2^7</td>
  <td>2^6</td>
  <td>2^5</td>
  <td>2^4</td>
  <td>2^3</td>
  <td>2^2</td>
  <td>2^1</td>
  <td>2^0</td>
</tr>
<tr>
  <td>Amount</td>
  <td>128</td>
  <td>64</td>
  <td>32</td>
  <td>16</td>
  <td>8</td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
<tr>
  <td>Binary</td>
  <td>0</td>
  <td>1</td>
  <td>0</td>
  <td>0</td>
  <td>0</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
</tr>
<tr>
  <td>Count</td>
  <td></td>
  <td>64</td>
  <td></td>
  <td></td>
  <td></td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
</table>

With this table in mind:

`01000111 = 64 + 4 + 2 + 1`

`01000111 = 71`

Here is another example

<table>
<tr>
  <td>Binary</td>
  <td>1</td>
  <td>1</td>
  <td>0</td>
  <td>1</td>
  <td>0</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
</tr>
<tr>
  <td>Count</td>
  <td>128</td>
  <td>64</td>
  <td></td>
  <td>16</td>
  <td></td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
</table>

`11010111 = 128 + 64 + 16 + 4 + 2 + 1`

`11010111 = 215`

### What about addition?

What is `10010101 + 11110010?`
<table>
<tr>
<td>Binary One</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>Binary Two</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>

<tr>
<td>Sum</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
</table>

We now take this sum and multiply the total binary amounts by their respective base 2 amount

<table>
<tr>
<td>Sum</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>

<tr>
  <td>Amount</td>
  <td>128</td>
  <td>64</td>
  <td>32</td>
  <td>16</td>
  <td>8</td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>

<tr>
<tr>
  <td>Total</td>
  <td>128 * 2</td>
  <td>64 * 1</td>
  <td>32 * 1</td>
  <td>16 * 2</td>
  <td>8 * 0</td>
  <td>4 * 1</td>
  <td>2 * 1</td>
  <td>1 * 1</td>
</tr>
</table>


`10010101 + 11110010` =  `128* 2	 + 64 *1 + 	+  32 *1	+  16* 2	+  8 * 0	+  4 *1	+  2 * 1	 + 1 *1`

`10010101 + 11110010` = `256 + 64 + 32 + 32 + 4 +2 +1`

`10010101 + 11110010` = `391`

Try subtraction! It works too!

## Resources

- http://www.garlikov.com/Soc_Meth.html

# ASCII

So computers are really good at processing numbers quickly, but a computer only really understands zeros and ones. What about letters? How do we translate binary into characters? In english we have 26 letters in the alphabet, so we assign these from 0 to 25 and give them binary values! But..that's not enough. What about uppercase letters? We want our computer to do that so we need an additional 26...and what about special characters? There are 32 of those (you can count them if you don't believe me), and the space bar also.

So where do we start? Do we start from 0? Or 20? or 40? In the early 1960s this was a big issue. Different computer manufactures would use different encoding schemes which made communication extremely difficult. So the American National Standards Institute (ANSI) set out to develop a common scheme and in 1963 they came out with ASCII which was designed as a __7__ bit encoding which means that each character is represented by a set of 7 0s or 1s, which means that we have 2^7 or 128 possible characters. We go from `0000000` (0) to `1111111` (127) in this scheme.

- 26 - lowercase characters
- 26 - uppercase characters
- 10  - digit characters
- 32 -  punctuation characters
- 1 - space character

So we're at 95....what's left?

So back in days of ASCII development, teletype machines (typewriters used to send messages across a network) were very common. These machines had additional characters to control them (new line key, carriage return key, backspace key etc.). These characters are called control characters and they make up the rest of the numbers.

Here is what an ASCII table looks like

![http://www.asciitable.com/index/asciifull.gif](http://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg)

If you look at the table you can see the that capital letters always have a 0 in the 2^5 spot where lowercase letters always have 1 there. This was intentional and a smart way to distinguish easily between uppercase and lowercase letters

Take 10 minutes (or watch it at double speed and take 5 minutes) to watch the [Tom Scott video on Unicode](https://www.youtube.com/watch?v=MijmeoH9LT4).

### Ok...nice history lesson, but why do I care about this?

Believe it or not, we use this quite a bit: this is what our .charCodeAt function does in JavaScript! Try typing `"A".charCodeAt(0);` in chrome console and see what you get? Then look up the value in an ASCII table and you will see it corresponds to `01000001`. You can use `charCode` to do manipulation with letters and strings which is very useful!

# UTF

Unfortunately, ASCII does not cover a large amount of special characters, so we use a character encoding called UTF-8. UTF-8 has become the dominant character encoding for the World Wide Web, accounting for 81.4% of all Web pages in November 2014 (with most popular East Asian encoding at 1.4% and all of them combined under 5%). The Internet Mail Consortium (IMC) recommends that all e-mail programs be able to display and create mail using UTF-8.[5] The W3C recommends UTF-8 as default encoding in their main standards (XML and HTML).

Here is what a UTF table looks like - [http://www.utf8-chartable.de/](http://www.utf8-chartable.de/)

Watch the [Tom Scott Video on UTF8](https://www.youtube.com/watch?v=qBex3IDaUbU&index=2&list=PLzH6n4zXuckqmf_xUcvU5caZVoctP2ehL).
