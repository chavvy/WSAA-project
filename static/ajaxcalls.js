
 
    function getAll(callback){
        $.ajax({
            "url": "https://samedo1999.pythonanywhere.com/books",
            "method":"GET",
            "data":"",
            "dataType": "JSON",
            "success":function(result){
                //console.log(result);
                callback(result)
     
            },
            "error":function(xhr,status,error){
                console.log("error: "+status+" msg:"+error);
            }
        });

    }


    function createBook(book, callback){
        console.log(JSON.stringify(book));
        $.ajax({
            "url": "https://samedo1999.pythonanywhere.com/books",
            "method":"POST",
            "data":JSON.stringify(book),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success":function(result){
                //console.log(result);
                callback(result)  
            },
            "error":function(xhr,status,error){
                console.log("error: "+status+" msg:"+error);
            }
        });

    }
    function updateBook(book, callback){
        console.log("updateing " +JSON.stringify(book));
        $.ajax({
            "url": "https://samedo1999.pythonanywhere.com/books/"+encodeURI(book.id),
            "method":"PUT",
            "data":JSON.stringify(book),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success":function(result){
                console.log(result);
                callback(result)   
            },
            "error":function(xhr,status,error){
                console.log("error: "+status+" msg:"+error);
            }
        });
    }
    function deleteBook(id, callback){
        $.ajax({
            "url": "https://samedo1999.pythonanywhere.com/books/"+id,
            "method":"DELETE",
            "data":"",
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success":function(result){
                console.log(result);
                callback(result)  
            },
            "error":function(xhr,status,error){
                console.log("error: "+status+" msg:"+error);
            }
        });

    }

function getBookById(id, callback, errorCallback) {
    $.ajax({
        url: "https://samedo1999.pythonanywhere.com/books/"+id,
        method: "GET",
        dataType: "json",
        success: function(book) {
            callback(book);
        },
        error: function(xhr, status, error) {
            if (errorCallback) {
                errorCallback(xhr, status, error);
            } else {
                console.log("Error fetching book by id:", status, error);
            }
        }
    });
}


