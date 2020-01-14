# 05_JS_Clock_JS30_02

			setInterval()
			
The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.


setInterval(function(){ alert("Hello"); }, 3000);

// Alert "Hello" every 3 seconds (3000 milliseconds):

			setTimeout()
			
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

Tip: 1000 ms = 1 second.

Tip: The function is only executed once. If you need to repeat execution, use the setInterval() method.

Tip: Use the clearTimeout() method to prevent the function from running.


setTimeout(function(){ alert("Hello"); }, 3000);

//Display an alert box after 3 seconds (3000 milliseconds):


