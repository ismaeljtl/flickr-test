# Flickr Application test

Hi holidayextras team! 

Here is my solution for the Frontend task. The app meets all the requirements listed in the test link (https://github.com/holidayextras/recruitment-tasks/blob/master/developer-flickr-task.md) except for 1 point: 

- Use the `safe_search` parameter. 

What happened with this requirement? Well, the endpoint of the API is: `http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?` and the documentation for this endpoint is: `https://www.flickr.com/services/feeds/docs/photos_public/`, in which there is no parameter for the safe_search. Without this, the safe search is impossible to make.

Note: Although the endpoint doesn't have a parameter for proper pagination, I implemented an infinite scroll calling the same endpoint again but concatenating the data received.

Hope you like the project!