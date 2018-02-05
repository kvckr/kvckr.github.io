# .Net

## General information

All .NET source code is compiled to **IL**. IL is then converted to machine code at run-time by a Just-In-Time (JIT) compiler.

Programmers can use the **Collect()** method of the **Garbage Collector** class to forcefully execute Garbage Collector.

CLR uses the **Dispose and Finalize methods** to perform garbage collection of run-time objects of .NET applications.

The **Finalize** method is called automatically by the runtime. CLR has a garbage collector (GC), which periodically checks for objects in heap that are no longer referenced by any object or program. It calls the Finalize method to free the memory used by such objects. 

The **Dispose** method is called by the programmer. Dispose is another method to release the memory used by an object. The Dispose method needs to be explicitly called in code to dereference an object from the heap. Only the classes that implement the IDisposable interface can invoke the Dispose method.

**Managed code** is the code that is executed directly by the CLR instead of the operating system.

Execution process for managed code:

* Choosing a language compiler
* Compiling the code to IL
* Compiling IL to native code
* Executing the code

The differences between namespace and assembly: Assembly is physical grouping of logical units, Namespace, logically groups of classes.

**String** class is immutable. A value once assigned to it cannot be changed after. When the value in the String object is modified, a new object is created, in memory. On the other hand, the **StringBuilder** class is mutable.

**Lazy initialization** is a process by which an object is not initialized until it is first called in your code. 

**Object pooling** is a concept of storing a pool (group) of objects in memory that can be reused later as needed
