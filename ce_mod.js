var field_data = {
    user: {
        fn: "Username or Nickname",
        ht: "Display Name of User on the Server",
        al: "user"
    },
    dis: {
        fn: "User Discriminator",
        ht: "4-digit number that appears after the # sign in a user's profile",
        al: "dis"
    },
    id: {
        fn: "User ID",
        ht: "User ID; Usually a long string of numbers accessible via developer settings",
        al: "id"
    },
    off: {
        fn: "Offense",
        ht: "Rule(s) that the user in question has broken",
        al: "off"
    },
    act: {
        fn: "Action Taken",
        ht: "Actions taken, as well as recommendations for future staff action against further rule breaking",
        al: "act"
    },

};

function updateSyntax() {
    var user = $('#user-field').val();
    var dis = $('#dis-field').val();
    var id = $('#id-field').val();
    var off = $('#off-field').val();
    var act = $('#act-field').val();

    var final = '';
    var today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if(dd < 10){
        dd = '0' + dd;
    }

    if(mm < 10){
        mm = '0' + mm;
    }

    var today = dd + '/' + mm + '/' + yyyy;

    if (user && dis && id && off && act) {
        final = '**Username**: ' + user + '#' + dis + '\n**User ID**: ' + id + '\n**Date**: ' + today + '\n**Offense**: ' + off + '\n**Action Taken**: ' + act;
    }

    $('#syntax').text(final);
}

function pageLoad(page) {
    window.sct = 1;
    var cb_btn = '';
    var st = '';

    $('div#content').on('input', 'input[id*="-field"]', updateSyntax);
    cb_btn = '#copy-btn';
    st = '#syntax';

    var cb = new Clipboard(cb_btn, {
        text: function(trigger) {
            return $(st).text();
        }
    });

    cb.on('success', function(e) {
        $(e.trigger).html('Copied');
        setTimeout(function() {
            $(e.trigger).html('Copy');
        }, 2000);
    });
}
