//easier method of changing the url for all functions (set to local url by default)
const BASE_URL = "http://127.0.0.1:5000"; 
 
    function getAll(callback){
        $.ajax({
            "url": BASE_URL+"/books/",
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
            "url": BASE_URL+"/books/",
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
            "url": BASE_URL+"/books/"+encodeURI(book.id),
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
            "url": BASE_URL+"/books/"+id,
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
        url: BASE_URL+"/books/"+id,
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


