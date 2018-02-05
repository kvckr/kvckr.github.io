# WPF

There are advantages of using WPF:

* Anywhere execution (Windows or Web)
* Bindings (less coding)
* Common look and feel (resource and styles)
* Declarative programming (XAML)
* Expression blend animation (Animation ease)
* Fast execution (Hardware acceleration)
* Graphic hardware independent (resolution independent)

**Dispatcher**: - This class ensures that all WPF UI objects can be accessed directly only by the thread who own him. Other threads who do not own him have to go via the dispatcher object.

XAML is a XML file, which represents your WPF UI
WPF controls can be categorized in to four categories: Controls (Content Controls (Button, label), Items Controls (ListBox)), Panels (Grid, StackPanel), Shape (Line, Ellipse), and ContentPresenter.
Resources can be referred statically or dynamically. Static referred resources evaluate the resource only once and after that if the resources change those changes are not reflected in the binding. While dynamic referred resources are evaluated every time, the resource is needed.
WPF Binding’s helps to send / receive data between WPF objects while command helps to send and receive actions
All the above 4 things define how data will flow between target and source objects when WPF binding is applied.
Two way: - Data can flow from both source to target and from target to source.
One way: - Data flows only from source to target.
One way to source: - Data flows only from target to source.
One time: - Data flows only for the first time from source to target and after that no communication happens.
A command class in WPF wraps end user actions in to a class so that they can be reused repeatedly. WPF Command class idea is an implementation of command pattern from gang of four design pattern.
If WPF source data have changed, then data of the source is not in synch with the target. This is where INotifyPropertyChanged (Notifies clients that a property value has changed) help us. In simple words, the source sends a notification to the target WPF object that data has changed in the source and he should refresh himself with the fresh data
The MVVM pattern is a close variant of the Presentation Model pattern, optimized to leverage some of the core capabilities of WPF, such as data binding, data templates, commands, and behaviors.
In the MVVM pattern, the view encapsulates the UI and any UI logic, the view model encapsulates presentation logic and state, and the model encapsulates business logic and data. The view interacts with the view model through data binding, commands, and change notification events. 
View Model: This class is the bridge between model and view. It handles connection logic, data transformation logic and action mapping between model and view.
