function get_invitation_code() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('InvitationCode');
}

function get_shop_id() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('shop_id');
}

function get_group_id() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('group_id');
}

window.onload = (event) => {
    document.getElementsByTagName("iframe")[0].src = `https://share.sq6677.com/?InvitationCode=${get_invitation_code()}&shop_id=${get_shop_id()}&group_id=${get_group_id()}`;
};
