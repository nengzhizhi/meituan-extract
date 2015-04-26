function WebSocketClient(e, t) {
	this.socket = window.socket;
	var n = getCookie("wpush_server_url");
	("" == n || "undefined" == n) && (n = "wss://wpush.meituan.com"), 
	
	(null == this.socket || void 0 == this.socket) 
		&& 
	(
		this.socket = new Socket(n + "/websocket/" + e + "/" + t), 
		window.socket = this.socket, 
		this.socket.connect(), 
		window.socket_env = "online"
	)
}



this.connection.onmessage = function(e) {
	if (null == e || null == e.data || "HB" == e.data) 
		return void("HB" == e.data && (window.heartBeatResult = !0, N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_SUCCESS)));
	
	for (var t = decodeURIComponent(e.data), n = 0; n < window.onMsgListeners.length; n++) 
		window.onMsgListeners[n](t)
}

Socket.prototype.connect = function() {
	if (this.connection) 
		try {
			this.connection.onclose = null, 
			this.connection.close()
		} catch (e) {}

	this.connection = window.WebSocket ? new WebSocket(this.url) : {}, 

	watt.emit("created", [window.socket]), 

	this.connection.onmessage = function(e) {
		if (null == e || null == e.data || "HB" == e.data) return void("HB" == e.data && (window.heartBeatResult = !0, N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_SUCCESS)));
		for (var t = decodeURIComponent(e.data), n = 0; n < window.onMsgListeners.length; n++) window.onMsgListeners[n](t)
	}, this.connection.onopen = function(e) {
		var t = this;
		window.heartbeat_timer && clearInterval(window.heartbeat_timer), window.heartBeatResult = !0, window.heartbeat_timer = setInterval(function() {
			keepAlive(t)
		}, 1e4), window.retryConnect_timer && clearInterval(window.retryConnect_timer);
		for (var n = 0; n < window.onOpenListeners.length; n++) window.onOpenListeners[n](e);
		watt.emit("connected", [window.socket])
	}, this.connection.onerror = function(e) {
		clearInterval(window.heartbeat_timer);
		for (var t = 0; t < window.onErrorListeners.length; t++) window.onErrorListeners[t](e)
	}, this.connection.onclose = function(e) {
		clearInterval(window.heartbeat_timer);
		for (var t = 0; t < window.onCloseListeners.length; t++) window.onCloseListeners[t](e);
		N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_FAIL)
	}
}

//解析Order返回信息
function f(e) {
	var t = g(),
		n = t.length,
		r = e.length,
		i = [];
	
	for (var s = 0; s < r; s++) {
		var o = 0;
		for (var u = 0; u < n; u++)
			$(t[u]).attr("id") == e[s].wm_order_id_view_str && (o = 1);
		
		o == 0 && i.push(e[s])
	}
	return i
}

//获取OrderId后使用OrderId获取Order

function l(t, n, r, i, s) {
	var o = (new Date).getTime();
	if (window.isGettingOrderData && o - window.gettingOrderDataTime < 3e4) return;
	window.isGettingOrderData = !0, window.gettingOrderDataTime = o;
	var u = document.getElementById("hashframe").contentWindow,
		a = u.document;
	$.post("/api/order/new/orderList/v3", {
		wmPoiId: t,
		acctId: r,
		appType: "3",
		token: n,
		lastOrderId: i
	}, function(t) {
		window.isGettingOrderData = !1;
		if (t.code == undefined) {
			u.location.reload();
			return
		}
		if (t.code == 0) {
			var n = e.getCookie("count"),
				r = f(t.data),
				o = r.length;
			i != 0 && (o += parseInt(e.getCookie("count")));
			if (!o || o < 0) o = 0;
			c(o), typeof u.analyse != "undefined" && r.length > 0 && u.analyse(r);
			var l = window.wmSystemApi;
			o > 0 ? (l && l.showWindow ? l.showWindow("Maximize") : window.orderNotify && window.orderNotify({
				request: "New_order",
				"ï»¿persistent": !0
			}), $(a).find("#J-no-order").hide()) : $(a).find("#J-no-order").show(), !s && r.length > 0 && (n || (n = 0), n < r.length && recordReceivePushMsg(-1))
		} else $(a).find("#validateWarning").text(t.msg)
	})
}


a.onMessageListener(function(e) {
		var t = $.parseJSON(e);
		if (t && t.code == 1) {
			var n = t.orderId;
			n && (n != getLastOrderId() && checkNewOrders(!0), recordReceivePushMsg(n))
		}
		t && t.code == 2 && updateBusinessStatus();
		if (t && t.code == 3) {
			var r = document.getElementById("hashframe").contentWindow,
				i = r.dispose,
				o = [];
			o.push(t.orderViewId), typeof i != "undefined" && i(o)
		}
		if (t && t.code == 4) {
			var u = t.toRefundCount;
			u > 0
		}
		t && t.code == 5 && s.assembleTip(t), 
		t && t.code == 6 && s.assemblePreorder(t), 
		t && t.code == 1e3 && updateReceivedCenterMsg()
	}), 

	supportWebSocket() ? 
						(
							setInterval(updateBusinessStatus, 12e4), 
							setInterval(updateOutTimeAndSyncOrder, 12e4), 
							setInterval(updateReceivedCenterMsg, 12e4)
						) 

						: 
						(
							setInterval(updateBusinessStatus, 3e4), 
							setInterval(updateOutTimeAndSyncOrder, 3e4), 
							setInterval(updateReceivedCenterMsg, 3e4)
						), 

	supportWebSocket() ? 
							setInterval(checkNewOrders, 12e4) : setInterval(checkNewOrders, 3e4)
}