# CSharp

## General information

**C#** is a **strongly typed**, **object-oriented** language, was designed by Microsoft.

A **collection** can be defined as a **group of related items**. **Generics** provide the **type-safety** to your class **at the compile time**.

The **virtual** keyword is used to specify that the methods and the properties of that class **can be overridden in derived classes**.

A **static** function, unlike a regular (instance) function, is **not associated with an instance of the class**. They is **associated with a type**. A **static class** is a class which can only contain static members, and therefore **cannot be instantiated**.

A **sealed** class **cannot be used as a base class**. This class **cannot be inherited**.

A **delegate** is similar to a class that is used for **storing the reference to a method** and **invoking that method at runtime**.

In C#, a **property** is a way to **expose an internal data element of a class** in a simple and intuitive manner. You can create a property by defining an externally available name and then writing the set and get property accessors. The get property accessor is used to return the property value. The set property accessor is used to assign a new value to the property.

**Enumeration** is defined as a **value type** that consists of a **set of named values**. Every enumeration type has an underlying type, which can be **any integral type** except char.

**Constructor** is a **special method** of a class, which is **called automatically** when the instance of a class is created. It is created with **the same name** as the class and **initializes all class members**.

The main features of a **constructor** are as follows:

* Constructors **do not have any return type**.
* Constructors **can be overloaded**.
* It is **not mandatory** to declare a constructor.

**Interface** is a template that contains only signature of methods without body. All the methods inside an interface are always **public by default**. You **cannot specify any other access modifier** for them.

* An interface is used to implement **multiple inheritance** in code.
* It defines a **specific set of methods and their arguments**.
* A class implementing an interface **must implement all** of its methods.
* An interface **can derive from more than one interface**.

**Abstract class** is a class that **cannot be instantiated** and it is always used as a base class. It has some characteristic:

* You **cannot instantiate** an abstract class **directly**. It **must be inherited**.
* You **can have abstract as well as non-abstract members** in an abstract class.
* You **must declare at least one abstract method** in the abstract class.

## Differences between class and structure

**Class**:

1.  A class is a **reference type**.
2.  The memory for the instance is allocated in **heap**.
3.  Classes **support inheritance**.
4.  Variables of a class **can be assigned as null**.

**Structure**: 

1.  A structure is a **value type**.
2.  In structure, memory is allocated on **stack**.
3.  Structures **do not support inheritance**.
4.  Variables of a structure **cannot be assigned as null**.
5.  Structure does not require constructor/destructor and **members can be initialized automatically**.

## Inheritance

Inheritance in .NET works only on instance base. Static methods are defined on the type level not on the instance level. That is why overriding doesn't work with static methods/properties/events...

### Mutiple inheritance

The most obvious multiple inheritance problem is with function overriding.
Let's say have two classes A and B, both of which define a method "doSomething". Now you define a third class C, which inherits from both A and B, but you don't override the "doSomething" method. Which implementation of the method should it use? Without any further clarification, it is impossible for the compiler to resolve the ambiguity.

Second problem of multiple inheritance is violating Single Responsibility Principle, because having two or more base classes mean having two or more responsibility for a derived class. Each base class has your own responsibility.