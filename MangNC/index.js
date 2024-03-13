// Bai1
var arr = [];
function save() {
    var a = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        prdname: document.getElementById('namePro').value,
        quantity: document.getElementById('quantity').value,
        price: document.getElementById('price').value,
    }
    console.log(a);
    arr.push(a);

}
function show() {
    var html = '';
    for (i in arr) {
        var n = i;
        n++;
        html += "<tr >"
        html += "<td>" + (n) + "</td>";
        html += "<td>" + arr[i].name + "</td>";
        html += "<td>" + arr[i].id + "</td>";
        html += "<td>" + arr[i].prdname + "</td>";
        html += "<td>" + arr[i].quantity + "</td>";
        html += "<td>" + arr[i].price + "</td>";
        html += "<td>" + parseFloat(arr[i].quantity) + parseFloat(arr[i].price) + "</td";
        html += "</tr>";
        document.getElementById('tbl').innerHTML = html
    }
}
function reset() {
    document.getElementById('name').value = ' ';
    document.getElementById('id').value = ' ';
    document.getElementById('namePro').value = ' ';
    document.getElementById('quantity').value = ' ';
    document.getElementById('price').value = ' ';
}

// Bai2
var Arr = [
    {
        User_Name: "us1",
        Password: "p1"
    },
    {
        User_Name: "us2",
        Password: "p2"
    },
    {
        User_Name: "us3",
        Password: "p3"
    },
]
function Login() {
    var user = document.getElementById("User_Name").value
    var pass = document.getElementById("Password").value
    console.log(user, pass)
    for (i in Arr) {
        if (user == Arr[i].User_Name) 
        {
            if (pass == Arr[i].Password) 
            {
                document.getElementById('error').innerHTML = 'dang nhap thanh cong'
            }
            else
            {
                document.getElementById('error').innerHTML = 'sai mat khau'
            }
            break
        }
        else
        {
            document.getElementById('error').innerHTML = 'tai khoan khong ton tai'
        }
    }
}
function Clear() {
    document.getElementById("User_Name").value = ''
    document.getElementById("Password").value = ''
}