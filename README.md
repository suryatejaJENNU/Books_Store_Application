# Title

    Bookstore application

## Objective

    to develop an interactive Bookstore application using ReactJS. The application should allow users to browse and search for books, view book details, add books to a shopping cart, and place an order.

## Tech Stack
 ReactJS, React Router, Redux or React Context API, CSS or CSS frameworks

## Completion Instructions

### Functionality

#### Must Have

    1.Build a ReactJS application with multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.
    2.Build a ReactJS application with multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.

Page: Home

    Page Details:
        Header - links for pages Home, Book List, Cart
        Banner - Heading, description, and “Explore Books” Button
    Navigation:

Page: Book List

    Page Details:
        Header - links for pages Home, Book List, Cart, Book Items (title, subtitle, image, price ), Search (by title, author), Filter (by Price)
    Navigation:
        "Book List" link in Header
        "Explore Books" Button
        "Back" Button in Book Details Page

Page: Book Details

    Page Details:
        Book detailed Information (title, subtitle, image, description, price)
        "Add to cart" Button
        "Back" button
    Navigation: Each Book Item in Book List Page

Page: Cart

    Page Details:
        Cart Items (title, subtitle, image, price)
        "Remove" Button
        Order Summary
        "Checkout" Button
    Navigation:
        "Cart" link in Header
        "Back" Button in Checkout Page

Page: Checkout

    Page Details:
        "Back" Button,
        Order Form (Personal Details, Summary, Place Order)
    Navigation:
        Checkout in Cart
    

### Technical Details
### Routes and Paths of Bookstore Application:
        Page	        Route	        Path
        Home	        Home	        /
        Book List	    Book List	    /books
        Book Details	Book Details	/books/:id
        Cart	        Cart	        /cart
        Checkout	    Checkout	    /checkout
       Not Found	    Not Found	    /not-found

### Home
        Component	    Details	State	                                    API (IT Bookstore)
        Home	        Heading, Description, and "ExploreBooks" button     	-	-
        Header	        links for pages Home, Book List, Cart	                -	-

### Book List
        Component	        Details	                                           State	                     API (IT Bookstore)
        BookList		                                              piStatus, booksData, priceRangeValue      /new
                        
        Header	        links for pages Home, Book List, Cart	                                               -	-
        SearchInput	    Search (by title, author)	searchInputValue	                                    /search/{query}
        PriceRange	    Filter (by price)	                                                                  -	-
        BookItem	    Book Items (title, subtitle, image, price)	                                          -	-
        Loader		                                                                                          - -
        ErrorMessage		 -	-

### Book Details 
        Component	        Details	                                            State	                       API (IT Bookstore)
        bookDetails 	Book detailed Information - image, 
                        title, subtitle, price, description, etc.,  
                        “Add to cart” Button, “Back” button	apiStatus,       bookDetailsData	                /books/{isbn}
        Header	        links for pages Home, Book List, Cart               	-	-                               _ _
        Loader		        -	-
        ErrorMessage		-	-

### Cart Details
        Component	        Details	                                            State	                       API (IT Bookstore)
        Cart	            Cart Items, “Remove” Button, Order Summary, 
                            “Checkout” Button	                               (Context Consumer)	              - -
        Header	            links for pages Home, Book List, Cart	              -	-                             - -
        CartItem	        Book Detailed Info (image, title, subtitle, 
                            price, description)	                                (Context Consumer)              	-

### Cart Details
        Component	        Details	                                            State	                       API (IT Bookstore)
         Checkout	        “Back” button	                               (Context Consumer)                   	-
        UserDetailsForm	    Order Form - Personal Details 
                            - First Name, Last Name, Email, Mobile No. 
                            , Place Order Button, Order Summary	userDetails,    isFormSubmitted	                     -
### Not Found
         Component	        Details	                                            State	                       API (IT Bookstore)
        NotFound	          -	                                                    -                           	-   
        Header	            links for pages Home, Book List, Cart	            Header	                        links for pages Home, Book List, Cart

### App Details
         Component	        Details	                                            State	                       API (IT Bookstore)
            App             	-	                             cartList (Context Provider), 
                                                                 Context: cartList, addToCart, deleteFromCart	    -


#### Nice to Have

    Bonus tasks include implementing user authentication, unit tests, and deploying the application on a hosting platform.

### Guidelines to develop a project

#### Must Have
    2.Commit your code regularly and include clear commit messages.
#### Nice to Have

    List the additional/suggested guidelines to follow while developing the project, mentioned in the Assignment, if any

### Submission Instructions

#### Must Have

    1.Create a new public repository on GitHub for the assignment.
    2.Include a README file explaining the project setup, usage instructions, and any additional information.
    4.Ensure the repository is well-organized and easy to navigate.
#### Nice to Have

    List the suggested instructions to follow while submitting the project mentioned in the Assignment, if any

## Resources

### Design files

   Crossword website https://www.crossword.in/apps/iwish
### APIs

   https://api.itbook.store/

### Third-party packages

    1.React Router (react-router-dom)
    2.Loader (react-loader-spinner)
    3.Icons (react-icons)
    4.Range Slider (rc-slider)