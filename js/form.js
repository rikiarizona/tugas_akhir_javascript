function buat_login(){
    var remelm = document.getElementById('X');
    remelm.parentElement.removeChild(remelm);
    var p = document.createElement('p');
    p.className = 'tulisan_login';
    p.innerHTML = 'SILAHKAN MENDAFTAR';
    var posisiDaftar = document.getElementsByTagName('div')[0];
    posisiDaftar.appendChild(p);
    var form = document.createElement('form');
    posisiDaftar.appendChild(form);
    var label_name = document.createElement('label')
    label_name.innerHTML = 'Nama User';
    form.appendChild(label_name);
    var ipt_name = document.createElement('input')
    ipt_name.type = 'text';
    ipt_name.className = 'form_login';
    ipt_name.name = 'username';
    ipt_name.placeholder = 'Nama User..';
    label_name.appendChild(ipt_name);
    var label_hp = document.createElement('label');
    label_hp.innerHTML = 'Nomor Handphone';
    form.appendChild(label_hp);
    var ipt_hp = document.createElement('input');
    ipt_hp.type = 'number';
    ipt_hp.className = 'form_login';
    ipt_hp.name = 'number';
    ipt_hp.placeholder = 'Nomor Handphone.';
    label_hp.appendChild(ipt_hp);
    var label_username = document.createElement('label');
    label_username.innerHTML = 'Username';
    form.appendChild(label_username);
    var ipt_username = document.createElement('input');
    ipt_username.type = 'text';
    ipt_username.className = 'form_login';
    ipt_username.name = 'username';
    ipt_username.placeholder = 'Username atau email ..';
    label_username.appendChild(ipt_username)
    var label_password = document.createElement('label');
    label_password.innerHTML = 'Password';
    form.appendChild(label_password);
    var ipt_password = document.createElement('input');
    ipt_password.type = 'password';
    ipt_password.className = 'form_login';
    ipt_password.name = 'password';
    ipt_password.placeholder = 'Password ..';
    label_password.appendChild(ipt_password);
    var tombol_log = document.createElement('button');
    tombol_log.className = 'tombol_login';
    tombol_log.innerHTML = 'DAFTAR SEKARANG';
    form.appendChild(tombol_log);
}