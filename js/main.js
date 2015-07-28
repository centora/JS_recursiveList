(function(){   
    function recursiveList (data) {

        var container = document.getElementById('list'),
            list = document.createElement("ul"),
            listItem;

        container.appendChild(list);

        for(var i = 0; i < data.length; i++){
            listItem = document.createElement("li");

            if( !(data[i].constructor.toString().indexOf('Array') > -1) ){
                listItem.innerHTML = data[i];
            }else{
                listItem.appendChild(recursiveList (data[i]));
            }
            list.appendChild(listItem);
        }

        return list;
    }

    recursiveList ( [1,2,[3,4,[5,6,7],8],9,10] );

})();