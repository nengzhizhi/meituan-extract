function decodeHtmlChar(e) {
	if (e) {
		for (var t = ["&", "<", ">"], n = ["&amp;", "&lt;", "&gt;"], r = n.length, i = 0; r > i; i++) e = e.replace(new RegExp(t[i], "g"), n[i]);
		return e
	}
	return ""
}

function Socket(e) {
	this.url = e
}

function WebSocketClient(e, t) {
	this.socket = window.socket;
	var n = getCookie("wpush_server_url");
	("" == n || "undefined" == n) && (n = "wss://wpush.meituan.com"), (null == this.socket || void 0 == this.socket) && (this.socket = new Socket(n + "/websocket/" + e + "/" + t), window.socket = this.socket, this.socket.connect(), window.socket_env = "online")
}

function keepAlive(e) {
	var t = new Date; - 1 != last_health && t.getTime() - last_health > health_timeout ? e.close() : sendHB(e)
}

function sendHB(e) {
	if (window.heartBeatResult || N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_FAIL), N.NetDaemon.isConnected()) try {
		e.send("~#HHHBBB#~")
	} catch (t) {}
	window.heartBeatResult = !1
}

function retryConnect(e) {
	e.connect()
}

function getCookie(e) {
	return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}

function supportWebSocket() {
	return window.WebSocket = window.WebSocket || window.MozWebSocket, window.WebSocket ? !0 : !1
}

function Socket(e) {
	this.url = e
}

function WebSocketClient(e, t) {
	this.socket = window.socket;
	var n = getCookie("wpush_server_url");
	("" == n || "undefined" == n) && (n = "wss://wpush.meituan.com"), (null == this.socket || void 0 == this.socket) && (this.socket = new Socket(n + "/websocket/" + e + "/" + t), window.socket = this.socket, this.socket.connect(), window.socket_env = "online")
}

function keepAlive(e) {
	var t = new Date; - 1 != last_health && t.getTime() - last_health > health_timeout ? e.close() : sendHB(e)
}

function sendHB(e) {
	if (window.heartBeatResult || N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_FAIL), N.NetDaemon.isConnected()) try {
		e.send("~#HHHBBB#~")
	} catch (t) {}
	window.heartBeatResult = !1
}

function retryConnect(e) {
	e.connect()
}

function getCookie(e) {
	return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}

function supportWebSocket() {
	return window.WebSocket = window.WebSocket || window.MozWebSocket, window.WebSocket ? !0 : !1
}

function Socket(e) {
	this.url = e
}

function WebSocketClient(e, t) {
	this.socket = window.socket;
	var n = getCookie("wpush_server_url");
	("" == n || "undefined" == n) && (n = "wss://wpush.meituan.com"), (null == this.socket || void 0 == this.socket) && (this.socket = new Socket(n + "/websocket/" + e + "/" + t), window.socket = this.socket, this.socket.connect(), window.socket_env = "online")
}

function keepAlive(e) {
	var t = new Date; - 1 != last_health && t.getTime() - last_health > health_timeout ? e.close() : sendHB(e)
}

function sendHB(e) {
	if (window.heartBeatResult || N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_FAIL), N.NetDaemon.isConnected()) try {
		e.send("~#HHHBBB#~")
	} catch (t) {}
	window.heartBeatResult = !1
}

function retryConnect(e) {
	e.connect()
}

function getCookie(e) {
	return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}

function supportWebSocket() {
	return window.WebSocket = window.WebSocket || window.MozWebSocket, window.WebSocket ? !0 : !1
}
jQuery.each(["get", "post"], function(e, t) {
	jQuery[t] = function(e, n, r, i) {
		function s(e, t, n) {
			var i = JSON.stringify(e);
			i = decodeHtmlChar(i);
			var s = JSON.parse(i);
			r(s, t, n)
		}
		return jQuery.isFunction(n) && (i = i || r, r = n, n = {}), jQuery.isFunction(r) || (r = function() {}), jQuery.ajax({
			type: t,
			url: e,
			data: n,
			success: s,
			dataType: i
		})
	}
}), $.ajax2 = function(e) {
	function t(t, n, r) {
		var i = JSON.stringify(t);
		i = decodeHtmlChar(i);
		var s = JSON.parse(i);
		e.success(s, n, r)
	}
	return jQuery.isFunction(e.data) && (e.type = e.type || e.callback, e.callback = data, e.data = {}), jQuery.isFunction(e.callback) || (e.callback = function() {}), jQuery.ajax({
		type: e.method,
		url: e.url,
		data: e.data,
		success: t,
		dataType: e.type
	})
}, define("module/ajax_util", function() {}), define("module/cookie", [], function() {
	function e(e, t) {
		var n = arguments[2] ? arguments[2] : "";
		document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + n
	}

	function t(e) {
		for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
			var i = $.trim(n[r]);
			if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
		}
		return ""
	}

	function n(e, t, n) {
		if (n) {
			var r = new Date;
			r.setTime(r.getTime() + 1e3 * n), document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + r.toGMTString()
		} else document.cookie = e + "=" + encodeURIComponent(t)
	}
	return {
		setCookie: e,
		getCookie: t,
		setCookieEx: n
	}
}), define("page/widgets/footer", ["module/cookie"], function(e) {
	$(function() {
		var t = e.getCookie("appVersion");
		if (t == "undefined" || t == "") t = "1.0.0.1";
		$("#version").text(" ç‰ˆæœ¬å·:" + t)
	})
}), !
function(e) {
	function t(e) {
		for (var t = n, r = 0; r < e.length; r++) t = t[e[r]] = t[e[r]] || {};
		return t
	}
	var n = {
		version: .1
	};
	n.apply = function(e, t) {
		if (e && t && "object" == typeof t) for (var n in t)"undefined" != typeof t[n] && (e[n] = t[n]);
		return e
	}, n.ns = function(e, r) {
		var i = "string" == typeof e ? t(e.split(".")) : n;
		return n.apply(i, e), r && "function" == typeof r && (r = r.apply(i, [n])), n.apply(i, r)
	}, n.WVS = {}, e.watt = n
}(window), watt.ns("bus", function(e) {
	e.WVS.BUS = {};
	var t = function(t) {
			return this.ns = t || this._DEF_NAMESPACE, this.events = {}, e.WVS.BUS[this.ns] ? e.WVS.BUS[this.ns] : (e.WVS.BUS[this.ns] = this, this)
		};
	t.prototype = {
		_DEF_NAMESPACE: "_defaultNS",
		on: function(e, t) {
			var n, r = e.split(/\s+/);
			if (t && "function" == typeof t) for (; n = r.shift();)(this.events[n] || (this.events[n] = [])).push(t);
			return this
		},
		off: function(e, t) {
			if (e || t) {
				for (var n, r, i = e.split(/\s+/); n = i.shift();) if (r = this.events[n]) if (t) for (var s = r.length - 1; s >= 0; s--) r[s] === t && r.splice(s, 1);
				else delete this.events[n]
			} else this.events = {};
			return this
		},
		one: function(e, t) {
			var n = this,
				r = function() {
					n.off(e, r), t.apply(this, arguments)
				};
			this.on(e, r)
		},
		emit: function(e, t, n) {
			for (var r, i, s, o = e.split(/\s+/); r = o.shift();) for (i = (this.events[r] || []).slice(); s = i.shift();) s.apply(n || this, t || []);
			return this
		}
	};
	var n = function(t, n) {
			4 == t.length ? "string" != typeof t[1] && (t[3] = t[2], t[2] = t[1], t[1] = t[0], t[0] = e.bus.Bus._DEF_NAMESPACE) : "function" == typeof t[1] && (t[2] = t[1], t[1] = t[0], t[0] = e.bus.Bus._DEF_NAMESPACE);
			for (var r, i, s = t.shift().split(/\s+/g); r = s.shift();) i = e.WVS.BUS[r || e.bus.Bus._DEF_NAMESPACE], i && i[n].apply(i, t)
		};
	return e.ns({
		on: function(e, t, r) {
			return n([e, t, r], "on"), this
		},
		off: function(e, t, r) {
			return n([e, t, r], "off"), this
		},
		one: function(e, t, r) {
			return n([e, t, r], "one"), this
		},
		emit: function(e, t, r, i) {
			return n([e, t, r, i], "emit"), this
		},
		Bus: function(t) {
			new e.bus.Bus(t)
		}
	}, 0), {
		Bus: new t
	}
});
var N = {
	apply: function(e, t) {
		if (e && t && "object" == typeof t) for (var n in t)"undefined" != typeof t[n] && (e[n] = t[n]);
		return e
	},
	override: function(e, t) {
		N.apply(e.prototype, t)
	},
	extend: function() {
		var e = function(e) {
				for (var t in e) this[t] = e[t]
			},
			t = Object.prototype.constructor;
		return function(r, i, s) {
			var o, u = function() {
					r.apply(this, arguments), i.apply(this, arguments)
				},
				a = function() {},
				f = r.prototype;
			return a.prototype = f, o = u.prototype = new a, o.constructor = u, u.superclass = f, f.constructor == t && (f.constructor = r), u.override = function(e) {
				N.override(u, e)
			}, o.superclass = function() {
				return f
			}, o.override = e, N.override(u, s), u.extend = function(e) {
				return N.extend(u, e)
			}, u
		}
	}()
},
	isSupportOnline = "onLine" in navigator && -1 == navigator.appName.indexOf("Microsoft");
N.NetDaemon = {
	_connection: void 0,
	_netStatus: 3,
	STATUS_ONLINE: 0,
	STATUS_OFFLINE: 1,
	STATUS_PING_SUCCESS: 2,
	STATUS_PING_FAIL: 3,
	EVENT_ONLINE: 0,
	EVENT_OFFLINE: 1,
	EVENT_PING_SUCCESS: 2,
	EVENT_PING_FAIL: 3,
	INTERVAL_TIME: 1e4,
	PING_TIMEOUT: 3e4,
	PING_FAIL_DELAY: 1e4,
	_onOffline: function(e) {
		this._netStatus = this.STATUS_OFFLINE, this.log("Net status change. from " + e + " to STATUS_OFFLINE================"), this._connection && this._connection.stopHeartBeat()
	},
	_onPingSuccess: function(e) {
		this._netStatus = this.STATUS_PING_SUCCESS, this.log("Net status change. from " + e + " to STATUS_PING_SUCCESS================"), watt.emit("pingSuccess")
	},
	_onPingFail: function(e, t) {
		this._netStatus = this.STATUS_PING_FAIL, this.log("Net status change. from " + t + " to  STATUS_PING_FAIL, reconnect " + e / 1e3 + "s later=============="), this.reconnect(e)
	},
	_onEvents: [function(e) {
		var t = "STATUS_ONLINE";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE===========");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline(t);
			break;
		case this.EVENT_PING_SUCCESS:
			this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this._onPingFail(this.PING_FAIL_DELAY, t)
		}
	}, function(e) {
		var t = "STATUS_OFFLINE";
		switch (e) {
		case this.EVENT_ONLINE:
			this._netStatus = this.STATUS_ONLINE, this.log("Net status change. from " + t + " to STATUS_ONLINE, reconnecting==================="), watt.emit("online"), this.reconnect(0);
			break;
		case this.EVENT_OFFLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_OFFLINE");
			break;
		case this.EVENT_PING_SUCCESS:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_PING_SUCCESS"), this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this.log("Net status change. from " + t + " to STATUS_ONLINE, reconnecting===================")
		}
	}, function(e) {
		var t = "STATUS_PING_SUCCESS";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline("STATUS_PING_SUCCESS");
			break;
		case this.EVENT_PING_SUCCESS:
			this.log("Net status change. from " + t + " to STATUS_PING_SUCCESS.");
			break;
		case this.EVENT_PING_FAIL:
			this._onPingFail(this.PING_FAIL_DELAY, t)
		}
	}, function(e) {
		var t = "STATUS_PING_FAIL";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline(t);
			break;
		case this.EVENT_PING_SUCCESS:
			this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this.log("Net status change. from STATUS_PING_FAIL to " + t + ". reconnect " + this.PING_FAIL_DELAY / 1e3 + "s later.=========="), this.reconnect(this.PING_FAIL_DELAY)
		}
	}],
	log: function(e) {
		"dev" == window.socket_env && console.log(e)
	},
	changeStatus: function(e) {
		this._onEvents[this._netStatus].call(this, e)
	},
	reconnect: function(e) {
		this._connection && this._connection.reconnect(e)
	},
	created: function(e) {
		this._connection = e
	},
	connected: function(e) {
		this._connection = e, this.changeStatus(this.STATUS_PING_SUCCESS)
	},
	isConnected: function() {
		return this.STATUS_PING_SUCCESS === this._netStatus
	},
	init: function() {
		var e = this;
		isSupportOnline && (window.addEventListener("online", function() {
			e.changeStatus(e.STATUS_ONLINE)
		}), window.addEventListener("offline", function() {
			e.changeStatus(e.STATUS_OFFLINE)
		})), watt.on("created", function(n) {
			e.created(n)
		}), watt.on("connected", function(n) {
			e.connected(n)
		}), watt.on("connectFail", function() {
			e.changeStatus(e.STATUS_PING_FAIL)
		}), watt.on("onMessage onAck", function() {
			e._connection || (e._connection = N.connection, e.changeStatus(e.STATUS_PING_SUCCESS))
		})
	}
}, N.NetDaemon.init();
var last_health = -1,
	health_timeout = 3e3;
window.heartBeatResult = !0, window.heartbeat_timer = 0, window.retryConnect_timer = 0, window.socket, window.onMsgListeners = [], window.onOpenListeners = [], window.onCloseListeners = [], window.onErrorListeners = [], window.socket_env = "online", Socket.prototype.connect = function() {
	if (this.connection) try {
		this.connection.onclose = null, this.connection.close()
	} catch (e) {}
	this.connection = window.WebSocket ? new WebSocket(this.url) : {}, watt.emit("created", [window.socket]), this.connection.onmessage = function(e) {
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
}, Socket.prototype.reconnect = function(e) {
	clearInterval(window.retryConnect_timer);
	var t = this;
	window.retryConnect_timer = setInterval(function() {
		retryConnect(t)
	}, e)
}, Socket.prototype.stopHeartBeat = function() {
	clearInterval(window.heartbeat_timer)
}, WebSocketClient.prototype = {
	onMessageListener: function(e) {
		window.onMsgListeners.push(e)
	},
	onOpenListener: function(e) {
		window.onOpenListeners.push(e)
	},
	onErrorListener: function(e) {
		window.onErrorListeners.push(e)
	},
	onCloseListener: function(e) {
		window.onCloseListeners.push(e)
	}
}, WebSocketClient.prototype.send = function(e) {
	this.socket.connection.send(e)
}, define("module/push_client", function() {}), define("page/widgets/tip", ["module/cookie", "module/push_client"], function(e, t) {
	$(function() {
		var t = e.getCookie("token");
		if (t == "undefined" || t == "") return;
		$("#closeTip").bind("click", function() {
			$("#tipArea").hide(500)
		});
		var n = new WebSocketClient("waimai_e", t);
		n.onMessageListener(function(e) {
			var t = JSON.parse(e);
			t.tip && t.linkText && t.link && ($("#bTip").text(t.tip), $("#bLink").text(t.linkText), $("#bLink").attr("href", t.link), $("#tipArea").show(500))
		})
	})
}), define("module/notification", [], function() {
	var e = function(e) {
			this._options = e || {}, this._type = this._options.type || "warning", this._msg = this._options.msg || "", this._duration = this._options.duration || 5e3
		};
	return e.prototype = {
		show: function() {
			var e = $('<div class="notification"><span class="n-body n-' + this._type + '">' + this._msg + "</span></div>");
			$("body").append(e), $(".notification").fadeIn(500), setTimeout(this.destruct, this._duration)
		},
		destruct: function() {
			$(".notification").fadeOut(500), $(".notification").remove()
		}
	}, e
}), define("module/cookie", [], function() {
	function e(e, t) {
		var n = arguments[2] ? arguments[2] : "";
		document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + n
	}

	function t(e) {
		for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
			var i = $.trim(n[r]);
			if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
		}
		return ""
	}

	function n(e, t, n) {
		if (n) {
			var r = new Date;
			r.setTime(r.getTime() + 1e3 * n), document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + r.toGMTString()
		} else document.cookie = e + "=" + encodeURIComponent(t)
	}
	return {
		setCookie: e,
		getCookie: t,
		setCookieEx: n
	}
}), !
function(e) {
	function t(e) {
		for (var t = n, r = 0; r < e.length; r++) t = t[e[r]] = t[e[r]] || {};
		return t
	}
	var n = {
		version: .1
	};
	n.apply = function(e, t) {
		if (e && t && "object" == typeof t) for (var n in t)"undefined" != typeof t[n] && (e[n] = t[n]);
		return e
	}, n.ns = function(e, r) {
		var i = "string" == typeof e ? t(e.split(".")) : n;
		return n.apply(i, e), r && "function" == typeof r && (r = r.apply(i, [n])), n.apply(i, r)
	}, n.WVS = {}, e.watt = n
}(window), watt.ns("bus", function(e) {
	e.WVS.BUS = {};
	var t = function(t) {
			return this.ns = t || this._DEF_NAMESPACE, this.events = {}, e.WVS.BUS[this.ns] ? e.WVS.BUS[this.ns] : (e.WVS.BUS[this.ns] = this, this)
		};
	t.prototype = {
		_DEF_NAMESPACE: "_defaultNS",
		on: function(e, t) {
			var n, r = e.split(/\s+/);
			if (t && "function" == typeof t) for (; n = r.shift();)(this.events[n] || (this.events[n] = [])).push(t);
			return this
		},
		off: function(e, t) {
			if (e || t) {
				for (var n, r, i = e.split(/\s+/); n = i.shift();) if (r = this.events[n]) if (t) for (var s = r.length - 1; s >= 0; s--) r[s] === t && r.splice(s, 1);
				else delete this.events[n]
			} else this.events = {};
			return this
		},
		one: function(e, t) {
			var n = this,
				r = function() {
					n.off(e, r), t.apply(this, arguments)
				};
			this.on(e, r)
		},
		emit: function(e, t, n) {
			for (var r, i, s, o = e.split(/\s+/); r = o.shift();) for (i = (this.events[r] || []).slice(); s = i.shift();) s.apply(n || this, t || []);
			return this
		}
	};
	var n = function(t, n) {
			4 == t.length ? "string" != typeof t[1] && (t[3] = t[2], t[2] = t[1], t[1] = t[0], t[0] = e.bus.Bus._DEF_NAMESPACE) : "function" == typeof t[1] && (t[2] = t[1], t[1] = t[0], t[0] = e.bus.Bus._DEF_NAMESPACE);
			for (var r, i, s = t.shift().split(/\s+/g); r = s.shift();) i = e.WVS.BUS[r || e.bus.Bus._DEF_NAMESPACE], i && i[n].apply(i, t)
		};
	return e.ns({
		on: function(e, t, r) {
			return n([e, t, r], "on"), this
		},
		off: function(e, t, r) {
			return n([e, t, r], "off"), this
		},
		one: function(e, t, r) {
			return n([e, t, r], "one"), this
		},
		emit: function(e, t, r, i) {
			return n([e, t, r, i], "emit"), this
		},
		Bus: function(t) {
			new e.bus.Bus(t)
		}
	}, 0), {
		Bus: new t
	}
});
var N = {
	apply: function(e, t) {
		if (e && t && "object" == typeof t) for (var n in t)"undefined" != typeof t[n] && (e[n] = t[n]);
		return e
	},
	override: function(e, t) {
		N.apply(e.prototype, t)
	},
	extend: function() {
		var e = function(e) {
				for (var t in e) this[t] = e[t]
			},
			t = Object.prototype.constructor;
		return function(n, r, i) {
			var s, o = function() {
					n.apply(this, arguments), r.apply(this, arguments)
				},
				u = function() {},
				a = n.prototype;
			return u.prototype = a, s = o.prototype = new u, s.constructor = o, o.superclass = a, a.constructor == t && (a.constructor = n), o.override = function(e) {
				N.override(o, e)
			}, s.superclass = function() {
				return a
			}, s.override = e, N.override(o, i), o.extend = function(e) {
				return N.extend(o, e)
			}, o
		}
	}()
},
	isSupportOnline = "onLine" in navigator && -1 == navigator.appName.indexOf("Microsoft");
N.NetDaemon = {
	_connection: void 0,
	_netStatus: 3,
	STATUS_ONLINE: 0,
	STATUS_OFFLINE: 1,
	STATUS_PING_SUCCESS: 2,
	STATUS_PING_FAIL: 3,
	EVENT_ONLINE: 0,
	EVENT_OFFLINE: 1,
	EVENT_PING_SUCCESS: 2,
	EVENT_PING_FAIL: 3,
	INTERVAL_TIME: 1e4,
	PING_TIMEOUT: 3e4,
	PING_FAIL_DELAY: 1e4,
	_onOffline: function(e) {
		this._netStatus = this.STATUS_OFFLINE, this.log("Net status change. from " + e + " to STATUS_OFFLINE================"), this._connection && this._connection.stopHeartBeat()
	},
	_onPingSuccess: function(e) {
		this._netStatus = this.STATUS_PING_SUCCESS, this.log("Net status change. from " + e + " to STATUS_PING_SUCCESS================"), watt.emit("pingSuccess")
	},
	_onPingFail: function(e, t) {
		this._netStatus = this.STATUS_PING_FAIL, this.log("Net status change. from " + t + " to  STATUS_PING_FAIL, reconnect " + e / 1e3 + "s later=============="), this.reconnect(e)
	},
	_onEvents: [function(e) {
		var t = "STATUS_ONLINE";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE===========");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline(t);
			break;
		case this.EVENT_PING_SUCCESS:
			this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this._onPingFail(this.PING_FAIL_DELAY, t)
		}
	}, function(e) {
		var t = "STATUS_OFFLINE";
		switch (e) {
		case this.EVENT_ONLINE:
			this._netStatus = this.STATUS_ONLINE, this.log("Net status change. from " + t + " to STATUS_ONLINE, reconnecting==================="), watt.emit("online"), this.reconnect(0);
			break;
		case this.EVENT_OFFLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_OFFLINE");
			break;
		case this.EVENT_PING_SUCCESS:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_PING_SUCCESS"), this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this.log("Net status change. from " + t + " to STATUS_ONLINE, reconnecting===================")
		}
	}, function(e) {
		var t = "STATUS_PING_SUCCESS";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline("STATUS_PING_SUCCESS");
			break;
		case this.EVENT_PING_SUCCESS:
			this.log("Net status change. from " + t + " to STATUS_PING_SUCCESS.");
			break;
		case this.EVENT_PING_FAIL:
			this._onPingFail(this.PING_FAIL_DELAY, t)
		}
	}, function(e) {
		var t = "STATUS_PING_FAIL";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline(t);
			break;
		case this.EVENT_PING_SUCCESS:
			this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this.log("Net status change. from STATUS_PING_FAIL to " + t + ". reconnect " + this.PING_FAIL_DELAY / 1e3 + "s later.=========="), this.reconnect(this.PING_FAIL_DELAY)
		}
	}],
	log: function(e) {
		"dev" == window.socket_env && console.log(e)
	},
	changeStatus: function(e) {
		this._onEvents[this._netStatus].call(this, e)
	},
	reconnect: function(e) {
		this._connection && this._connection.reconnect(e)
	},
	created: function(e) {
		this._connection = e
	},
	connected: function(e) {
		this._connection = e, this.changeStatus(this.STATUS_PING_SUCCESS)
	},
	isConnected: function() {
		return this.STATUS_PING_SUCCESS === this._netStatus
	},
	init: function() {
		var e = this;
		isSupportOnline && (window.addEventListener("online", function() {
			e.changeStatus(e.STATUS_ONLINE)
		}), window.addEventListener("offline", function() {
			e.changeStatus(e.STATUS_OFFLINE)
		})), watt.on("created", function(t) {
			e.created(t)
		}), watt.on("connected", function(t) {
			e.connected(t)
		}), watt.on("connectFail", function() {
			e.changeStatus(e.STATUS_PING_FAIL)
		}), watt.on("onMessage onAck", function() {
			e._connection || (e._connection = N.connection, e.changeStatus(e.STATUS_PING_SUCCESS))
		})
	}
}, N.NetDaemon.init();
var last_health = -1,
	health_timeout = 3e3;
window.heartBeatResult = !0, window.heartbeat_timer = 0, window.retryConnect_timer = 0, window.socket, window.onMsgListeners = [], window.onOpenListeners = [], window.onCloseListeners = [], window.onErrorListeners = [], window.socket_env = "online", Socket.prototype.connect = function() {
	if (this.connection) try {
		this.connection.onclose = null, this.connection.close()
	} catch (e) {}
	this.connection = window.WebSocket ? new WebSocket(this.url) : {}, watt.emit("created", [window.socket]), this.connection.onmessage = function(e) {
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
}, Socket.prototype.reconnect = function(e) {
	clearInterval(window.retryConnect_timer);
	var t = this;
	window.retryConnect_timer = setInterval(function() {
		retryConnect(t)
	}, e)
}, Socket.prototype.stopHeartBeat = function() {
	clearInterval(window.heartbeat_timer)
}, WebSocketClient.prototype = {
	onMessageListener: function(e) {
		window.onMsgListeners.push(e)
	},
	onOpenListener: function(e) {
		window.onOpenListeners.push(e)
	},
	onErrorListener: function(e) {
		window.onErrorListeners.push(e)
	},
	onCloseListener: function(e) {
		window.onCloseListeners.push(e)
	}
}, WebSocketClient.prototype.send = function(e) {
	this.socket.connection.send(e)
}, define("module/push_client", [], function() {}), define("module/notification", [], function() {
	var e = function(e) {
			this._options = e || {}, this._type = this._options.type || "warning", this._msg = this._options.msg || "", this._duration = this._options.duration || 5e3
		};
	return e.prototype = {
		show: function() {
			var e = $('<div class="notification"><span class="n-body n-' + this._type + '">' + this._msg + "</span></div>");
			$("body").append(e), $(".notification").fadeIn(500), setTimeout(this.destruct, this._duration)
		},
		destruct: function() {
			$(".notification").fadeOut(500), $(".notification").remove()
		}
	}, e
}), define("module/cookie", [], function() {
	function e(e, t) {
		var n = arguments[2] ? arguments[2] : "";
		document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + n
	}

	function t(e) {
		for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
			var i = $.trim(n[r]);
			if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
		}
		return ""
	}

	function n(e, t, n) {
		if (n) {
			var r = new Date;
			r.setTime(r.getTime() + 1e3 * n), document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + r.toGMTString()
		} else document.cookie = e + "=" + encodeURIComponent(t)
	}
	return {
		setCookie: e,
		getCookie: t,
		setCookieEx: n
	}
}), define("util/template", [], function() {
	var e = {},
		t = {};
	!
	function(e) {
		for (var n = e.length; n--;) t[e[n]] = !0
	}("break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield".split(","));
	var n = function(e) {
			return t[e]
		};
	return function(t, r) {
		if (e[t]) return r ? e[t](r) : e[t];
		t = t.replace(/\/\*.*?\*\/|\/\/.*?[\n\r\t]/g, "").replace(/[\r\t\n]/g, " ");
		var i = {},
			s = "var ",
			o = t.match(/<%(.*?)%>/g).join(",").match(/[\_\$a-zA-Z]+[0-9]*/g);
		!
		function(e) {
			for (var t = e.length, r = ""; t--;) r = e[t], r && !n(r) && (i.hasOwnProperty(r) || (s += r + "= __data." + r + ",", i[r] = !0))
		}(o);
		var u = e[t] = new Function("__data", s + "__s=''; __s += '" + t.replace(/%>[\s]*<%/g, "").replace(/<%=(.*?)%>/g, "'+($1)+'").replace(/<%/g, "';").replace(/%>/g, "__s += '") + "';return __s;");
		return r ? u(r) : u
	}
}), define("tpl/tips/facetoface", [], function() {
	return '<div class="board tips-board f2f-board" >  <p><i class="icon i-add" style="margin-right: 10px"></i>    <span>ç”¨æˆ·å½“é¢åœ¨çº¿ä»˜æ¬¾æˆåŠŸï¼šè®¢å•åºå·     <% for(i in data.orders){ %>      <a href="/order/search?searchItem=<%= data.orders[i] %>"><%= data.orders[i] %>,</a></span>    <% } %>    <span>å¦‚éœ€è¯¦æƒ…ï¼Œè¯·åœ¨â€œå·²å¤„ç†â€çš„<a href="/order/today/processed?orderType=face2faceOnlinePay">â€œå½“é¢åœ¨çº¿ä»˜â€</a>ä¸­æŸ¥çœ‹è®¢å•ï¼</span>     <i class="close-board icon i-close-reverse fr"></i>  </p></div>'
}), define("tpl/tips/preorder", [], function() {
	return '<div class="board tips-board preorder-board" >  <p><i class="icon i-add" style="margin-right: 10px"></i>    <% for(i in data){ %>      <span>é¢„è®¢å•æé†’: ç”¨æˆ·:ã€<%= data[i].phone %> ã€‘è®¢å•åºå·:ã€ <a href="/order/search?searchItem=<%= data[i].dayPushOrderSeq %>"><%= data[i].dayPushOrderSeq %>         </a> ã€‘éœ€è¦30åˆ†é’Ÿå†…é€è¾¾; </span>    <% } %>    <span>å¦‚éœ€è¯¦æƒ…ï¼Œè¯·åœ¨â€œå·²å¤„ç†â€çš„<a href="/order/today/processed?orderType=waitingDelivery30">â€œ30åˆ†é’Ÿå†…éœ€é€è¾¾â€</a>ä¸­æŸ¥çœ‹è®¢å•ï¼</span>     <i class="close-board icon i-close-reverse fr"></i>  </p></div>'
}), define("page/widgets/tips_append", ["util/template", "tpl/tips/facetoface", "tpl/tips/preorder"], function(e, t, n) {
	function r(n) {
		var r = localStorage.getItem("face2face-order") || "",
			i = r.split(",");
		i.pop();
		var s = {
			data: {
				orders: i
			}
		};
		$(n).find(".boards-wrapper").append(e(t, s)), localStorage.setItem("face2face-order", "")
	}

	function i(t) {
		var r = document.getElementById("hashframe").contentWindow,
			i = r.document,
			s = {
				data: t
			};
		$(i).find(".boards-wrapper").append(e(n, s)), localStorage.setItem("preorder", "")
	}
	var s = function(e) {
			var t = e.daySeq,
				n = document.getElementById("hashframe").contentWindow,
				i = n.document,
				s = localStorage.getItem("face2face-order") || "";
			s = s + t + ",", localStorage.setItem("face2face-order", s);
			var o = $(i).find(".f2f-board");
			o.length == 0 && r(i)
		},
		o = function(e) {
			var t = document.getElementById("hashframe").contentWindow,
				n = t.document;
			e.remove(), localStorage.getItem("face2face-order") != "" && r(n)
		},
		u = function(e) {
			var t = document.getElementById("hashframe").contentWindow,
				n = t.document,
				r = $(n).find(".preorder-board"),
				s = localStorage.getItem("preorder") || "";
			s != "" ? s = JSON.parse(s) : s = [], s.push(e);
			if (r.length == 0) i(s);
			else {
				var o = JSON.stringify(s);
				localStorage.setItem("preorder", o)
			}
		},
		a = function(e) {
			e.remove();
			var t = localStorage.getItem("preorder") || "";
			t != "" ? t = JSON.parse(t) : t = [], t.length != 0 && i(t)
		};
	return {
		assembleTip: s,
		closeTip: o,
		assemblePreorder: u,
		closePreorder: a
	}
}), define("page/widgets/refund_audio", [], function() {
	var e = 999999,
		t = document.getElementById("refund-audio"),
		n = $(t).data("type");
	n == "five" ? n = 5 : n == "one" && (n = 1), t.load();
	var r = function(t, n) {
			if (n == 1 || n == 5 || n == e) {
				var r = 0;
				t.loop = !1, t.addEventListener("ended", function() {
					r < n - 1 && (t.play(), r++)
				}), t.play()
			} else(n = "loop") && t.addEventListener("ended", function() {
				t.play()
			})
		},
		i = function(i) {
			i > 0 ? n == "loop" ? r(t, e) : (n == 1 || n == 5) && r(t, n) : i == 0 && t != "stop" && t.stop()
		};
	return {
		play: i
	}
}), define("page/widgets/head-nav", ["module/notification", "module/cookie", "page/widgets/tips_append", "page/widgets/refund_audio"], function(e, t, n, r) {
	function i() {
		var e = m.height(),
			t = 55 + e + 3;
		$(".bd").css({
			top: t
		}), m.show()
	}

	function s(e, t) {
		var n = "";
		h.createCommand(function(e) {
			e.type == "out" && (n += e.str), e.type == "close" && t && t(n)
		}).execute(d.exePath + '\\AppDiagnose.exe "/command:' + e + '"')
	}

	function o(e) {
		$.ajax({
			type: "POST",
			url: "/api/log/pc/report",
			data: e,
			success: function(e) {},
			error: function(e, t, n) {}
		})
	}

	function u(t) {
		$("#drop-arrow-chain").hasClass("i-arrowdown") ? ($("#drop-arrow-chain").removeClass("i-arrowdown").addClass("i-arrowup"), $(".chain").addClass("activate"), $.ajax2({
			type: "POST",
			url: "/api/poi/poiList",
			async: !1
		}).done(function(t) {
			if (t.code != 0) {
				var n = new e({
					msg: "èŽ·å–é—¨åº—åˆ—è¡¨å‡ºé”™",
					type: "warning"
				});
				n.show()
			} else $("#poi_dropdown").empty(), $("#poi_dropdown").append("<h3>é—¨åº—åˆ—è¡¨</h3>"), $.each(t.data, function(e, t) {
				t.poiName == "å…¨éƒ¨é—¨åº—" ? $("#poi_dropdown").append('<li id="' + t.id + '" onclick="selectCurrentPoi(\'' + $.trim(t.id) + "','" + t.poiName + '\')"><a style="color:black">' + t.poiName + '<i class="icon i-arrowgo fr"></i></a>  </li>') : $("#poi_dropdown").append('<li id="' + t.id + '" onclick="selectCurrentPoi(\'' + $.trim(t.id) + "','" + t.poiName + '\')"><a style="color:black">' + t.poiName + "&nbsp;&nbsp;[" + t.businessDesc + "]" + '<i class="icon i-arrowgo fr"></i></a>  </li>')
			})
		})) : ($("#drop-arrow-chain").removeClass("i-arrowup").addClass("i-arrowdown"), $(".chain").removeClass("activate")), $("#poi_dropdown").toggle(), t.stopPropagation()
	}

	function a(e) {
		$("#drop-arrow-status").hasClass("i-arrowdown") ? ($("#drop-arrow-status").removeClass("i-arrowdown").addClass("i-arrowup"), $(".change-status").addClass("activate")) : ($("#drop-arrow-status").removeClass("i-arrowup").addClass("i-arrowdown"), $(".change-status").removeClass("activate")), $("#status_dropdown").toggle(), e.stopPropagation()
	}

	function f(e) {
		t.setCookie("searchItem", e);
		var n, r = Math.random();
		n = "/order/search?searchItem=" + l(e, "g") + "&random=" + r, document.location.hash = n
	}

	function l(e, t) {
		var n;
		return n = e.replace(/(^\s+)|(\s+$)/g, ""), t.toLowerCase() == "g" && (n = n.replace(/\s/g, "")), n
	}
	var c = window.wmNetworkApi,
		h = window.wmSystemApi,
		p = window.wmPrinterApi,
		d = h && h.getAppInfo && h.getAppInfo(),
		v = t.getCookie("wmPoiId"),
		m = $(".top-banner");
	m.length > 0 && (i(), $(window).resize(i)), m.find("a").bind("click", function(e) {
		e.preventDefault();
		var t = $(this).attr("href");
		document.location.hash = t
	});
	var g = function() {
			var n = t.getCookie("wmPoiId"),
				r = t.getCookie("appCode");
			$.post("/api/poi/poiList", function(r) {
				if (r.code != 0) {
					var i = new e({
						msg: "èŽ·å–é—¨åº—åˆ—è¡¨å‡ºé”™",
						type: "warning"
					});
					i.show()
				} else $.each(r.data, function(e, r) {
					r.poiName == "å…¨éƒ¨é—¨åº—" ? $("#poi_dropdown").append('<li id="' + r.id + '" onclick="selectCurrentPoi(\'' + $.trim(r.id) + "','" + r.poiName + '\')"><a style="color:black">' + r.poiName + '<i class="icon i-arrowgo fr"></i></a>  </li>') : $("#poi_dropdown").append('<li id="' + r.id + '" onclick="selectCurrentPoi(\'' + $.trim(r.id) + "','" + r.poiName + '\')"><a style="color:black">' + r.poiName + "&nbsp;&nbsp;[" + r.businessDesc + "]" + '<i class="icon i-arrowgo fr"></i></a>  </li>'), n == "undefined" ? ($("#select_poi_button_text").text(r.poiName), t.setCookie("wmPoiId", r.id)) : n != "" && n == r.id && $("#select_poi_button_text").text(r.poiName)
				})
			})
		};
	window.selectCurrentPoi = function(e, n) {
		$("#select_poi_button_text").text(n), t.setCookie("wmPoiId", e), location.reload(!0)
	}, window.changeStatus = function(e) {
		var n = e == 1 ? "[è¥ä¸šä¸­]" : "[åœæ­¢è¥ä¸šä¸­]",
			r = $.trim($("#select_poi_status_button_text").text());
		r != n && $.post("/api/poi/change_status", {
			wmPoiId: t.getCookie("wmPoiId"),
			token: t.getCookie("token"),
			status: e
		}, function(t) {
			t.code == 0 && ($("#select_poi_status_button_text").html(n + ' <i id="drop-arrow-status" class="icon i-arrowdown"></i>'), y(e, t.data.subStatus, t.data.shippingTimeDesc, t.data.strWmPoiStatusDesc))
		})
	};
	var y = function(e, t, n, r) {
			r != "" && r != undefined && $("#select_poi_status_button_text").html("[" + r + "]" + ' <i id="drop-arrow-status" class="icon i-arrowdown"></i>'), $("#shippingTimeLabel").text("è¥ä¸šæ—¶é—´ï¼š" + n), $("#select_poi_status_button_text").html("[" + r + "]" + ' <i id="drop-arrow-status" class="icon i-arrowdown"></i>'), $("#wmPoiStatusDiv").html(""), e == 1 && (t == 0 ? $("#wmPoiStatusDiv").html('<li class="cf"><p class="fl status selected" data-status=1onclick="changeStatus($(this).attr(\'data-status\'))">è¥ä¸šä¸­</p><p class="fl status-tip">å½“å‰é¤åŽ…å¤„äºŽè®¾ç½®çš„è¥ä¸šæ—¶é—´å†…ï¼Œæ­£å¸¸æŽ¥å—æ–°è®¢å•</p></li><hr style="width:410px"><li class="cf"><p class="fl status" data-status=3 onclick="changeStatus($(this).attr(\'data-status\'))">åœæ­¢è¥ä¸š</p><p class="fl status-tip">é€‚ç”¨äºŽè¾ƒé•¿æ—¶é—´åœæ­¢æä¾›æœåŠ¡ï¼Œä¸æŽ¥å—ä»»ä½•è®¢å•ï¼Œæ‰‹åŠ¨æ¢å¤è¥ä¸šåŽå¯æ­£å¸¸æŽ¥å—è®¢å•</p></li>') : t == 2 ? $("#wmPoiStatusDiv").html('<li class="cf"><p class="fl status selected" data-status=1onclick="changeStatus($(this).attr(\'data-status\'))">ä»…æŽ¥å—é¢„è®¢</p><p class="fl status-tip">å½“å‰é¤åŽ…å¤„äºŽè®¾ç½®çš„è¥ä¸šæ—¶é—´å¤–ï¼Œä¸”è®¾ç½®äº†æŽ¥å—é¢„è®¢å•ï¼Œæ–°è®¢å•ä¼šä»¥é¢„è®¢å•çš„å½¢å¼æç¤º</p></li><hr style="width:410px"><li class="cf"><p class="fl status" data-status=3 onclick="changeStatus($(this).attr(\'data-status\'))">åœæ­¢è¥ä¸š</p><p class="fl status-tip">é€‚ç”¨äºŽè¾ƒé•¿æ—¶é—´åœæ­¢æä¾›æœåŠ¡ï¼Œä¸æŽ¥å—ä»»ä½•è®¢å•ï¼Œæ‰‹åŠ¨æ¢å¤è¥ä¸šåŽå¯æ­£å¸¸æŽ¥å—è®¢å•</p></li><li class="cf"><p class="fl status j-set-time">è¥ä¸šè°ƒæ•´</p><p class="fl status-tip">å¦‚æ‚¨æœŸæœ›è°ƒæ•´å½“å‰è¥ä¸šçŠ¶æ€ï¼Œå¯æ›´æ”¹è¥ä¸šæ—¶é—´ã€é¢„è®¢è®¾ç½®</p></li>') : t == 4 && $("#wmPoiStatusDiv").html('<li class="cf"><p class="fl status selected" data-status=1onclick="changeStatus($(this).attr(\'data-status\'))">å¾…å¼€å§‹è¥ä¸š</p><p class="fl status-tip">å½“å‰é¤åŽ…å¤„äºŽè®¾ç½®çš„è¥ä¸šæ—¶é—´å¤–ï¼Œç½‘ç«™ä¸Šä¼šæ˜¾ç¤ºé¤åŽ…ä¼‘æ¯ä¸­</p></li><hr style="width:410px"><li class="cf"><p class="fl status" data-status=3 onclick="changeStatus($(this).attr(\'data-status\'))">åœæ­¢è¥ä¸š</p><p class="fl status-tip">é€‚ç”¨äºŽè¾ƒé•¿æ—¶é—´åœæ­¢æä¾›æœåŠ¡ï¼Œä¸æŽ¥å—ä»»ä½•è®¢å•ï¼Œæ‰‹åŠ¨æ¢å¤è¥ä¸šåŽå¯æ­£å¸¸æŽ¥å—è®¢å•</p></li><li class="cf"><p class="fl status j-set-time">è¥ä¸šè°ƒæ•´</p><p class="fl status-tip">å¦‚æ‚¨æœŸæœ›è°ƒæ•´å½“å‰è¥ä¸šçŠ¶æ€ï¼Œå¯æ›´æ”¹è¥ä¸šæ—¶é—´ã€é¢„è®¢è®¾ç½®</p></li>')), e == 3 && $("#wmPoiStatusDiv").html('<li class="cf"><p class="fl status selected" data-status=3onclick="changeStatus($(this).attr(\'data-status\'))">åœæ­¢è¥ä¸šä¸­</p><p class="fl status-tip">å½“å‰é¤åŽ…å¤„äºŽè¾ƒé•¿æ—¶é—´åœæ­¢æä¾›æœåŠ¡ï¼Œä¸æŽ¥å—ä»»ä½•è®¢å•ï¼Œæ‰‹åŠ¨æ¢å¤è¥ä¸šåŽå¯æ­£å¸¸æŽ¥å—è®¢å•</p></li><hr style="width:410px"><li class="cf"><p class="fl status" data-status=1 onclick="changeStatus($(this).attr(\'data-status\'))">æ¢å¤è¥ä¸š</p><p class="fl status-tip">ç³»ç»Ÿå°†æ ¹æ®é¤åŽ…çš„è¥ä¸šæ—¶é—´ã€é¢„è®¢è®¾ç½®è‡ªåŠ¨æ¢å¤è¥ä¸š</p></li>')
		};
	window.handleRefundApply = function(e) {
		var t = document.getElementById("hashframe").contentWindow,
			n = t.document,
			i = $(".unresolved-count").text(),
			s = 0;
		i != null && i != undefined && i != "" && (s = parseInt(i.trim().replace("(", "").replace(")", "")), s = isNaN(s) ? 0 : s);
		var o = isNaN(parseInt(e)) ? 0 : parseInt(e);
		!isNaN(o) && o > 0 ? o = o : !isNaN(o) && o == -1 && s > 0 ? o = s - 1 : o = 0, typeof o != "undefined" && o > 0 ? ($(".unresolved-count").empty().text("(" + o + ")"), $(n).find(".unresolved-order-count").empty().text("(" + o + ")"), r.play(o)) : ($(".unresolved-count").empty(), $(n).find(".unresolved-order-count").empty(), r.play(0))
	}, $(function() {
		g(), window.updateBusinessStatus = function() {
			$.post("/common/businessStatus", {
				wmPoiId: v
			}, function(e) {
				e.code == 0 ? y(e.status, e.subStatus, e.shippingTimeDesc, e.wmPoiStatusDesc) : (e.code = 1007) && window.location.reload()
			})
		}, window.updateOutTimeAndSyncOrder = function() {
			$.ajax({
				type: "POST",
				url: "/order/today/notify",
				data: {
					wmPoiId: v,
					source: 1
				},
				dataType: "JSON"
			}).success(function(e) {
				if (e.code == 0) {
					var t = document.getElementById("hashframe").contentWindow,
						n = t.document;
					e.cancelReason != "" && e.cancelReason != undefined && ($(n).find("#b-tip").text(e.cancelReason), $(n).find("#b-link").remove(), $(n).find(".tips-board").slideDown(500)), $("#order-total").text(e.orderTotalAll), $("#money-total").text(e.total), handleRefundApply(e.toRefundCount)
				} else(e.code = 1007) && window.location.reload()
			})
		}, window.updateReceivedCenterMsg = function() {
			$.post("/common/msg", function(e) {
				e.code == 0 && e.data != "" && $("#msg-tip").text(e.data + "æ¡æ–°æ¶ˆæ¯æœªè¯»!")
			})
		}, $(function() {
			updateReceivedCenterMsg()
		}), window.clearUnreadMsgCnt = function() {
			$.post("common/msg/read", function(e) {
				e.code == 0 && $("#msg-tip").text("")
			}), document.location.hash = "/settings/msgbox"
		}, setInterval(function() {
			$.post("/api/poi/today/register", {
				wmPoiId: v
			}, function(e) {
				e.code == 0 && window.wmTaskApi.addTask(e.data, 1)
			})
		}, 6e5)
	}), d && d.code >= 30 && setTimeout(function() {
		try {
			var e = h.getCache("report_lastReportTime");
			if (!e || (new Date).getTime() - parseInt(e) > 6048e5) {
				h.setCache("report_lastReportTime", (new Date).getTime().toString()), h.flushCache();
				var n = [{
					type: "sys",
					command: "sys",
					deal: function(e) {
						return e ? e.replace(/ä¿®è¡¥ç¨‹åº[^\n]*\n(\s+[^\n]*\n)*/g, "") : ""
					}
				}, {
					type: "usb",
					command: "usb /title:name"
				}],
					r = 0,
					i = function(e) {
						var u = n[e];
						s(u.command, function(e) {
							u.data = u.deal ? u.deal(e) : e;
							if (++r < n.length) i(r);
							else {
								var s = {
									wmPoiId: t.getCookie("wmPoiId")
								};
								$(n).each(function() {
									s[this.type] = this.data
								}), o(s)
							}
						})
					};
				n.length && i(r)
			}
		} catch (u) {}
	}, 6e5), $(".chain").click(u), $(".change-status").click(a), window.hideDropdown = function() {
		$("#status_dropdown").is(":visible") && ($("#drop-arrow-status").removeClass("i-arrowup").addClass("i-arrowdown"), $(".change-status").removeClass("activate"), $("#status_dropdown").hide()), $("#poi_dropdown").is(":visible") && ($("#drop-arrow-chain").removeClass("i-arrowup").addClass("i-arrowdown"), $(".chain").removeClass("activate"), $("#poi_dropdown").hide())
	}, $("body").click(hideDropdown);
	var b = document.getElementById("hashframe");
	b.onload = function() {
		var e = document.getElementById("hashframe").contentWindow,
			t = e.document;
		$(t).delegate(".close-board", "click", function() {
			var e = $(this).parents(".f2f-board"),
				t = $(this).parents(".preorder-board");
			e.length > 0 ? n.closeTip(e) : t.length > 0 ? n.closePreorder(t) : $(this).parents(".board").slideUp(500)
		}), $(t).click(hideDropdown)
	}, $(".nav").delegate(".j-set-time", "click", function() {
		var e = "/settings/poi#poi-section";
		document.location.hash = e
	}), $(".nav").delegate(".j-view-orderstat", "click", function() {
		var e = "/order/charts";
		document.location.hash = e
	});
	var w = $("#J-search");
	w.keyup(function(e) {
		if (e.keyCode == 13) {
			var t = l($(this).val(), "g");
			f(t)
		}
	}), $(".J-search-btn").bind("click", function() {
		var e = w.val();
		f(e)
	}), $("#msg-tip").bind("click", function() {
		clearUnreadMsgCnt()
	}), $(".msg-title").bind("click", function() {
		document.location.hash = "/settings/msgbox"
	}), $(".J-view-link").bind("click", function() {
		var e = $(this).data("id"),
			t = $(this).data("url");
		$.post("/settings/msg/link", {
			infoId: e
		}), parent.document.location.hash = t
	})
}), define("module/cookie", [], function() {
	function e(e, t) {
		var n = arguments[2] ? arguments[2] : "";
		document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + n
	}

	function t(e) {
		for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
			var i = $.trim(n[r]);
			if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
		}
		return ""
	}

	function n(e, t, n) {
		if (n) {
			var r = new Date;
			r.setTime(r.getTime() + 1e3 * n), document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + r.toGMTString()
		} else document.cookie = e + "=" + encodeURIComponent(t)
	}
	return {
		setCookie: e,
		getCookie: t,
		setCookieEx: n
	}
}), !
function(e) {
	"function" == typeof define && define.amd ? define("lib/jquery.zxxbox.3.0", e) : e(jQuery)
}(function() {
	var e = "linear-gradient(top, #fafafa, #eee)",
		t = '<style type="text/css">#zxxBlank{position:absolute;z-index:2000;left:0;top:0;width:100%;height:0;background:black;}.wrap_out{padding:5px;background:#eee;box-shadow:0 0 6px rgba(0,0,0,.5);position:absolute;z-index:2000;left:-9999px;}.wrap_in{background:#fafafa;border:1px solid #ccc;}.wrap_bar{border-bottom:1px solid #ddd;background:#f0f0f0;background:-moz-' + e + ";background:-o-" + e + ";background:-webkit-" + e + ";background:" + e + ";}.wrap_title{line-height:24px;padding-left:10px;margin:0;font-weight:normal;font-size:1em;}.wrap_close{position:relative;}.wrap_close a{width:20px;height:20px;text-align:center;margin-top:-22px;color:#34538b;font:bold 1em/20px Tahoma;text-decoration:none;cursor:pointer;position:absolute;right:6px;}.wrap_close a:hover{text-decoration:none;color:#f30;}.wrap_body{background:white;}.wrap_remind{width:16em;padding:30px 40px;}.wrap_remind p{margin:10px 0 0;}.submit_btn, .cancel_btn{display:inline-block;padding:3px 12px 1.99px;line-height:16px;border:1px solid;cursor:pointer;overflow:visible;}.submit_btn{background:#486aaa;border-color:#a0b3d6 #34538b #34538b #a0b3d6;color:#f3f3f3;}.submit_btn:hover{text-decoration:none;color:#fff;}.cancel_btn{background:#eee;border-color:#f0f0f0 #bbb #bbb #f0f0f0;color:#333;}</style>";
	$("head").append(t);
	var n = '<div id="zxxBlank" onselectstart="return false;"></div><div class="wrap_out" id="wrapOut"><div class="wrap_in" id="wrapIn"><div id="wrapBar" class="wrap_bar" onselectstart="return false;"><h4 id="wrapTitle" class="wrap_title"></h4><div class="wrap_close"><a href="javasctipt:" id="wrapClose" title="å…³é—­"></a></div></div><div class="wrap_body" id="wrapBody"></div></div></div>';
	$.fn.zxxbox = function(e) {
		e = e || {};
		var t = $.extend({}, r, e);
		return this.each(function() {
			var n = this.nodeName.toLowerCase();
			"a" === n && t.ajaxTagA ? $(this).click(function() {
				var t = $.trim($(this).attr("href"));
				if (t && 0 != t.indexOf("javascript:")) if (0 === t.indexOf("#")) $.zxxbox($(t), e);
				else {
					$.zxxbox.loading();
					var n = new Image;
					n.onload = function() {
						var r = n.width,
							i = n.height;
						if (r > 0) {
							var s = $('<img src="' + t + '" width="' + r + '" height="' + i + '" />');
							e.protect = !1, $.zxxbox(s, e)
						}
					}, n.onerror = function() {
						$.zxxbox.ajax(t, {}, e)
					}, n.src = t
				}
				return !1
			}) : $.zxxbox($(this), e)
		})
	}, $.zxxbox = function(e, t) {
		if (e) {
			var i = $.extend({}, r, t || {}),
				s = $("#wrapOut"),
				o = $("#zxxBlank");
			s.size() ? (s.show(), o[i.bg ? "show" : "hide"]()) : $("body").append(n), "object" == typeof e ? e.show() : e = $(e), $.o = {
				s: i,
				ele: e,
				bg: o.size() ? o : $("#zxxBlank"),
				out: s.size() ? s : $("#wrapOut"),
				tit: $("#wrapTitle"),
				bar: $("#wrapBar"),
				clo: $("#wrapClose"),
				bd: $("#wrapBody")
			}, $.o.tit.html(i.title), $.o.clo.html(i.shut), $.o.bd.empty().append(e), $.isFunction(i.onshow) && i.onshow(), $.zxxbox.setSize(), $.zxxbox.setPosition(), i.fix && $.zxxbox.setFixed(), i.drag ? $.zxxbox.drag() : $(window).resize(function() {
				$.zxxbox.setPosition()
			}), i.bar ? $.zxxbox.barShow() : $.zxxbox.barHide(), i.bg ? $.zxxbox.bgShow() : $.zxxbox.bgHide(), i.btnclose ? $.o.clo.click(function() {
				return $.zxxbox.hide(), !1
			}) : $.zxxbox.closeBtnHide(), i.bgclose && $.zxxbox.bgClickable(), i.delay > 0 && setTimeout($.zxxbox.hide, i.delay)
		}
	}, $.extend($.zxxbox, {
		setSize: function() {
			return $.o.bd.size() && $.o.ele.size() && $.o.bd.size() ? ($.o.out.css({
				width: $.o.s.width,
				"height:": $.o.s.height
			}), $.o.out) : void 0
		},
		setPosition: function(e) {
			if (e = e || !1, $.o.bg.size() && $.o.ele.size() && $.o.out.size()) {
				var t = $(window).width(),
					n = $(window).height(),
					r = $(window).scrollTop(),
					i = $("body").height();
				n > i && (i = n), $.o.bg.width(t).height(i).css("opacity", $.o.s.opacity);
				var s = $.o.out.outerHeight(),
					o = $.o.out.outerWidth(),
					u = r + (n - s) / 2,
					a = (t - o) / 2;
				return $.o.s.fix && window.XMLHttpRequest && (u = (n - s) / 2), e === !0 ? $.o.out.animate({
					top: u,
					left: a
				}) : $.o.out.css({
					top: u,
					left: a,
					zIndex: $.o.s.index
				}), $.o.out
			}
		},
		setFixed: function() {
			return $.o.out && $.o.out.size() ? (window.XMLHttpRequest ? $.zxxbox.setPosition().css({
				position: "fixed"
			}) : $(window).scroll(function() {
				$.zxxbox.setPosition()
			}), $.o.out) : void 0
		},
		bgClickable: function() {
			$.o.bg && $.o.bg.size() && $.o.bg.click(function() {
				$.zxxbox.hide()
			})
		},
		bgHide: function() {
			$.o.bg && $.o.bg.size() && $.o.bg.hide()
		},
		bgShow: function() {
			$.o.bg && $.o.bg.size() ? $.o.bg.show() : $('<div id="zxxBlank"></div>').prependTo("body")
		},
		barHide: function() {
			$.o.bar && $.o.bar.size() && $.o.bar.hide()
		},
		barShow: function() {
			$.o.bar && $.o.bar.size() && $.o.bar.show()
		},
		closeBtnHide: function() {
			$.o.clo && $.o.clo.size() && $.o.clo.hide()
		},
		hide: function() {
			return $.o.ele && $.o.out.size() && "none" !== $.o.out.css("display") && ($.o.out.fadeOut("fast", function() {
				!$.o.s.protect || $.o.ele.hasClass("wrap_remind") && !$.o.ele.attr("id") || $.o.ele.hide().appendTo($("body")), $(this).remove(), $.isFunction($.o.s.onclose) && $.o.s.onclose()
			}), $.o.bg.size() && $.o.bg.fadeOut("fast", function() {
				$(this).remove()
			})), !1
		},
		drag: function() {
			if (!$.o.out.size() || !$.o.bar.size()) return void $(document).unbind("mouseover").unbind("mouseup");
			var e = $.o.bar,
				t = $.o.out,
				n = !1,
				r = 0,
				i = 0,
				s = t.css("left"),
				o = t.css("top");
			e.mousedown(function(e) {
				n = !0, r = e.pageX, i = e.pageY
			}).css("cursor", "move"), $(document).mousemove(function(e) {
				if (n) {
					var u = e.pageX,
						a = e.pageY,
						f = u - r,
						l = a - i;
					t.css("left", parseInt(s) + f).css("top", parseInt(o) + l)
				}
			}), $(document).mouseup(function() {
				n = !1, s = t.css("left"), o = t.css("top")
			})
		},
		loading: function() {
			var e = $('<div class="wrap_remind">åŠ è½½ä¸­...</div>');
			$.zxxbox(e, {
				bar: !1
			})
		},
		ask: function(e, t, n, r) {
			var i = $('<div class="wrap_remind">' + e + '<p><button id="zxxSureBtn" class="submit_btn">ç¡®è®¤</button>&nbsp;&nbsp;<button id="zxxCancelBtn" class="cancel_btn">å–æ¶ˆ</button></p></div>');
			$.zxxbox(i, r), $("#zxxSureBtn").click(function() {
				$.isFunction(t) && t.call(this)
			}), $("#zxxCancelBtn").click(function() {
				n && $.isFunction(n) && n.call(this), $.zxxbox.hide()
			})
		},
		remind: function(e, t, n) {
			var r = $('<div class="wrap_remind">' + e + '<p><button id="zxxSubmitBtn" class="submit_btn">ç¡®è®¤</button</p></div>');
			$.zxxbox(r, n), $("#zxxSubmitBtn").click(function() {
				t && $.isFunction(t) && t.call(this), $.zxxbox.hide()
			})
		},
		ajax: function(e, t, n) {
			e && ($.zxxbox.loading(), n = n || {}, n.protect = !1, $.ajax({
				url: e,
				data: t || {},
				success: function(e) {
					$.zxxbox(e, n)
				},
				error: function() {
					$.zxxbox.remind("åŠ è½½å‡ºäº†ç‚¹é—®é¢˜ã€‚")
				}
			}))
		}
	});
	var r = {
		title: "å¯¹è¯æ¡†",
		shut: "Ã—",
		index: 2e3,
		opacity: .5,
		width: "auto",
		height: "auto",
		bar: !0,
		bg: !0,
		btnclose: !0,
		fix: !1,
		bgclose: !1,
		drag: !1,
		ajaxTagA: !0,
		protect: "auto",
		onshow: $.noop,
		onclose: $.noop,
		delay: 0
	}
}), define("module/communicate", [], function() {
	var e = "hashframe";
	if (document.getElementById(e)) var t = document.getElementById(e).contentWindow,
		n = t.document,
		r = {
			getChildDom: function(e) {
				var t = $(n).find(e);
				return console.log(t), t
			},
			getChildVar: function() {
				var e = 0,
					n = arguments[1] ? arguments[1] : "";
				e = "" == n ? t.varName : t.moduleName.varName
			}
		};
	else if ($(window.parent.document)) var r = {
		getParentDom: function(e) {
			var t = $(window.parent.document).find(e);
			return t
		},
		getParentVar: function() {
			var e = 0,
				t = arguments[1] ? arguments[1] : "";
			e = "" == t ? parent.varName : parent.moduleName.varName
		}
	};
	return r
}), define("util/template", [], function() {
	var e = {},
		t = {};
	!
	function(e) {
		for (var n = e.length; n--;) t[e[n]] = !0
	}("break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield".split(","));
	var n = function(e) {
			return t[e]
		};
	return function(t, r) {
		if (e[t]) return r ? e[t](r) : e[t];
		t = t.replace(/\/\*.*?\*\/|\/\/.*?[\n\r\t]/g, "").replace(/[\r\t\n]/g, " ");
		var i = {},
			s = "var ",
			o = t.match(/<%(.*?)%>/g).join(",").match(/[\_\$a-zA-Z]+[0-9]*/g);
		!
		function(e) {
			for (var t = e.length, r = ""; t--;) r = e[t], r && !n(r) && (i.hasOwnProperty(r) || (s += r + "= __data." + r + ",", i[r] = !0))
		}(o);
		var u = e[t] = new Function("__data", s + "__s=''; __s += '" + t.replace(/%>[\s]*<%/g, "").replace(/<%=(.*?)%>/g, "'+($1)+'").replace(/<%/g, "';").replace(/%>/g, "__s += '") + "';return __s;");
		return r ? u(r) : u
	}
}), define("tpl/userHistoryOrderTpl", [], function() {
	return '<table class="standard-table order-table">  <thead>   <tr style="padding-bottom: 5px;padding-top: 5px;background-color: lightgray;">         <th>æ—¶é—´</th>        <th>è®¢å•é‡‘é¢</th>        <th>è®¢å•æ˜Žç»†</th>        <th>åœ°å€</th>        <th>è®¢å•å¤‡æ³¨</th>        <th>åº—é“ºåç§°</th>    </tr> </thead> <tbody> <% for(var i in data) { %>    <tr>       <td><%= data[i].order_time_fmt %></td>       <td style="text-align: right;"><%= data[i].total_after %>å…ƒ</td>       <td>           <% for(var j in data[i].details) { %>               <span><%= data[i].details[j].food_name %></span> <span><%= data[i].details[j].count %>ä»½</span><br>           <% } %>       </td>       <td><%= data[i].recipient_address %></td>       <td><%= data[i].caution %></td>       <td><%= data[i].poi_name %></td>   </tr><% } %> </tbody></table>'
}), define("module/communicate", [], function() {
	var e = "hashframe";
	if (document.getElementById(e)) var t = document.getElementById(e).contentWindow,
		n = t.document,
		r = {
			getChildDom: function(e) {
				var t = $(n).find(e);
				return console.log(t), t
			},
			getChildVar: function() {
				var e = 0,
					n = arguments[1] ? arguments[1] : "";
				e = "" == n ? t.varName : t.moduleName.varName
			}
		};
	else if ($(window.parent.document)) var r = {
		getParentDom: function(e) {
			var t = $(window.parent.document).find(e);
			return t
		},
		getParentVar: function() {
			var e = 0,
				t = arguments[1] ? arguments[1] : "";
			e = "" == t ? parent.varName : parent.moduleName.varName
		}
	};
	return r
}), define("page/widgets/audio", ["module/communicate"], function(e) {
	window.isPlayingAudio = !1, window.isPreviewingAudio = !1, window.changeAudio = function(e, t) {
		var n = document.getElementById("hashframe").contentWindow,
			r = n.document,
			i = $(r.getElementById(e));
		i.empty();
		var s = i[0];
		s || (n = window.top, r = n.document, i = $(r.getElementById(e)), i.empty(), s = i[0]);
		var o = document.createElement("source");
		o.type = "audio/ogg", o.src = "meituan://" + t + ".ogg", s.appendChild(o);
		var o = document.createElement("source");
		o.type = "audio/ogg", o.src = "/static/media/" + t + ".ogg", s.appendChild(o), i.load()
	}, window.audioPlay = function() {
		if (isPreviewingAudio) {
			isPlayingAudio = !0;
			return
		}
		try {
			if (navigator.appName == "Microsoft Internet Explorer") {
				if (navigator.appVersion.match(/10./i) == "10." || navigator.appVersion.match(/9./i) == "9." || navigator.appVersion.match(/11./i) == "11.") {
					var e = document.getElementById("main_audio");
					e.play(), isPlayingAudio = !0;
					return
				}
				var e = document.getElementById("main_audio_ie");
				e.controls.play(), isPlayingAudio = !0;
				return
			}
			var e = document.getElementById("main_audio");
			e.play()
		} catch (t) {}
		var e = document.getElementById("main_audio");
		e.play(), isPlayingAudio = !0
	}, window.audioReset = function() {
		try {
			if (navigator.appName == "Microsoft Internet Explorer") {
				if (navigator.appVersion.match(/10./i) == "10." || navigator.appVersion.match(/9./i) == "9." || navigator.appVersion.match(/11./i) == "11.") {
					var e = document.getElementById("main_audio");
					e.pause(), isPlayingAudio = !1;
					return
				}
				var e = document.getElementById("main_audio_ie");
				e.controls.stop(), isPlayingAudio = !1;
				return
			}
			var e = document.getElementById("main_audio");
			e.pause()
		} catch (t) {}
		try {
			e.currentTime = 0
		} catch (n) {}
	}, window.audioStop = function() {
		try {
			if (navigator.appName == "Microsoft Internet Explorer") {
				if (navigator.appVersion.match(/10./i) == "10." || navigator.appVersion.match(/9./i) == "9." || navigator.appVersion.match(/11./i) == "11.") {
					var e = document.getElementById("main_audio");
					e.pause(), isPlayingAudio = !1;
					return
				}
				var e = document.getElementById("main_audio_ie");
				e.controls.stop(), isPlayingAudio = !1;
				return
			}
			var e = document.getElementById("main_audio");
			e.pause()
		} catch (t) {}
		var e = document.getElementById("main_audio");
		e.pause(), isPlayingAudio = !1
	}
}), !
function(e) {
	function t(e) {
		for (var t = n, r = 0; r < e.length; r++) t = t[e[r]] = t[e[r]] || {};
		return t
	}
	var n = {
		version: .1
	};
	n.apply = function(e, t) {
		if (e && t && "object" == typeof t) for (var n in t)"undefined" != typeof t[n] && (e[n] = t[n]);
		return e
	}, n.ns = function(e, r) {
		var i = "string" == typeof e ? t(e.split(".")) : n;
		return n.apply(i, e), r && "function" == typeof r && (r = r.apply(i, [n])), n.apply(i, r)
	}, n.WVS = {}, e.watt = n
}(window), watt.ns("bus", function(e) {
	e.WVS.BUS = {};
	var t = function(t) {
			return this.ns = t || this._DEF_NAMESPACE, this.events = {}, e.WVS.BUS[this.ns] ? e.WVS.BUS[this.ns] : (e.WVS.BUS[this.ns] = this, this)
		};
	t.prototype = {
		_DEF_NAMESPACE: "_defaultNS",
		on: function(e, t) {
			var n, r = e.split(/\s+/);
			if (t && "function" == typeof t) for (; n = r.shift();)(this.events[n] || (this.events[n] = [])).push(t);
			return this
		},
		off: function(e, t) {
			if (e || t) {
				for (var n, r, i = e.split(/\s+/); n = i.shift();) if (r = this.events[n]) if (t) for (var s = r.length - 1; s >= 0; s--) r[s] === t && r.splice(s, 1);
				else delete this.events[n]
			} else this.events = {};
			return this
		},
		one: function(e, t) {
			var n = this,
				r = function() {
					n.off(e, r), t.apply(this, arguments)
				};
			this.on(e, r)
		},
		emit: function(e, t, n) {
			for (var r, i, s, o = e.split(/\s+/); r = o.shift();) for (i = (this.events[r] || []).slice(); s = i.shift();) s.apply(n || this, t || []);
			return this
		}
	};
	var n = function(t, n) {
			4 == t.length ? "string" != typeof t[1] && (t[3] = t[2], t[2] = t[1], t[1] = t[0], t[0] = e.bus.Bus._DEF_NAMESPACE) : "function" == typeof t[1] && (t[2] = t[1], t[1] = t[0], t[0] = e.bus.Bus._DEF_NAMESPACE);
			for (var r, i, s = t.shift().split(/\s+/g); r = s.shift();) i = e.WVS.BUS[r || e.bus.Bus._DEF_NAMESPACE], i && i[n].apply(i, t)
		};
	return e.ns({
		on: function(e, t, r) {
			return n([e, t, r], "on"), this
		},
		off: function(e, t, r) {
			return n([e, t, r], "off"), this
		},
		one: function(e, t, r) {
			return n([e, t, r], "one"), this
		},
		emit: function(e, t, r, i) {
			return n([e, t, r, i], "emit"), this
		},
		Bus: function(t) {
			new e.bus.Bus(t)
		}
	}, 0), {
		Bus: new t
	}
});
var N = {
	apply: function(e, t) {
		if (e && t && "object" == typeof t) for (var n in t)"undefined" != typeof t[n] && (e[n] = t[n]);
		return e
	},
	override: function(e, t) {
		N.apply(e.prototype, t)
	},
	extend: function() {
		var e = function(e) {
				for (var t in e) this[t] = e[t]
			},
			t = Object.prototype.constructor;
		return function(n, r, i) {
			var s, o = function() {
					n.apply(this, arguments), r.apply(this, arguments)
				},
				u = function() {},
				a = n.prototype;
			return u.prototype = a, s = o.prototype = new u, s.constructor = o, o.superclass = a, a.constructor == t && (a.constructor = n), o.override = function(e) {
				N.override(o, e)
			}, s.superclass = function() {
				return a
			}, s.override = e, N.override(o, i), o.extend = function(e) {
				return N.extend(o, e)
			}, o
		}
	}()
},
	isSupportOnline = "onLine" in navigator && -1 == navigator.appName.indexOf("Microsoft");
N.NetDaemon = {
	_connection: void 0,
	_netStatus: 3,
	STATUS_ONLINE: 0,
	STATUS_OFFLINE: 1,
	STATUS_PING_SUCCESS: 2,
	STATUS_PING_FAIL: 3,
	EVENT_ONLINE: 0,
	EVENT_OFFLINE: 1,
	EVENT_PING_SUCCESS: 2,
	EVENT_PING_FAIL: 3,
	INTERVAL_TIME: 1e4,
	PING_TIMEOUT: 3e4,
	PING_FAIL_DELAY: 1e4,
	_onOffline: function(e) {
		this._netStatus = this.STATUS_OFFLINE, this.log("Net status change. from " + e + " to STATUS_OFFLINE================"), this._connection && this._connection.stopHeartBeat()
	},
	_onPingSuccess: function(e) {
		this._netStatus = this.STATUS_PING_SUCCESS, this.log("Net status change. from " + e + " to STATUS_PING_SUCCESS================"), watt.emit("pingSuccess")
	},
	_onPingFail: function(e, t) {
		this._netStatus = this.STATUS_PING_FAIL, this.log("Net status change. from " + t + " to  STATUS_PING_FAIL, reconnect " + e / 1e3 + "s later=============="), this.reconnect(e)
	},
	_onEvents: [function(e) {
		var t = "STATUS_ONLINE";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE===========");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline(t);
			break;
		case this.EVENT_PING_SUCCESS:
			this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this._onPingFail(this.PING_FAIL_DELAY, t)
		}
	}, function(e) {
		var t = "STATUS_OFFLINE";
		switch (e) {
		case this.EVENT_ONLINE:
			this._netStatus = this.STATUS_ONLINE, this.log("Net status change. from " + t + " to STATUS_ONLINE, reconnecting==================="), watt.emit("online"), this.reconnect(0);
			break;
		case this.EVENT_OFFLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_OFFLINE");
			break;
		case this.EVENT_PING_SUCCESS:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_PING_SUCCESS"), this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this.log("Net status change. from " + t + " to STATUS_ONLINE, reconnecting===================")
		}
	}, function(e) {
		var t = "STATUS_PING_SUCCESS";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline("STATUS_PING_SUCCESS");
			break;
		case this.EVENT_PING_SUCCESS:
			this.log("Net status change. from " + t + " to STATUS_PING_SUCCESS.");
			break;
		case this.EVENT_PING_FAIL:
			this._onPingFail(this.PING_FAIL_DELAY, t)
		}
	}, function(e) {
		var t = "STATUS_PING_FAIL";
		switch (e) {
		case this.EVENT_ONLINE:
			this.log("Net status change. unexpected event. on " + t + ", and comes a EVENT_ONLINE");
			break;
		case this.EVENT_OFFLINE:
			this._onOffline(t);
			break;
		case this.EVENT_PING_SUCCESS:
			this._onPingSuccess(t);
			break;
		case this.EVENT_PING_FAIL:
			this.log("Net status change. from STATUS_PING_FAIL to " + t + ". reconnect " + this.PING_FAIL_DELAY / 1e3 + "s later.=========="), this.reconnect(this.PING_FAIL_DELAY)
		}
	}],
	log: function(e) {
		"dev" == window.socket_env && console.log(e)
	},
	changeStatus: function(e) {
		this._onEvents[this._netStatus].call(this, e)
	},
	reconnect: function(e) {
		this._connection && this._connection.reconnect(e)
	},
	created: function(e) {
		this._connection = e
	},
	connected: function(e) {
		this._connection = e, this.changeStatus(this.STATUS_PING_SUCCESS)
	},
	isConnected: function() {
		return this.STATUS_PING_SUCCESS === this._netStatus
	},
	init: function() {
		var e = this;
		isSupportOnline && (window.addEventListener("online", function() {
			e.changeStatus(e.STATUS_ONLINE)
		}), window.addEventListener("offline", function() {
			e.changeStatus(e.STATUS_OFFLINE)
		})), watt.on("created", function(t) {
			e.created(t)
		}), watt.on("connected", function(t) {
			e.connected(t)
		}), watt.on("connectFail", function() {
			e.changeStatus(e.STATUS_PING_FAIL)
		}), watt.on("onMessage onAck", function() {
			e._connection || (e._connection = N.connection, e.changeStatus(e.STATUS_PING_SUCCESS))
		})
	}
}, N.NetDaemon.init();
var last_health = -1,
	health_timeout = 3e3;
window.heartBeatResult = !0, window.heartbeat_timer = 0, window.retryConnect_timer = 0, window.socket, window.onMsgListeners = [], window.onOpenListeners = [], window.onCloseListeners = [], window.onErrorListeners = [], window.socket_env = "online", Socket.prototype.connect = function() {
	if (this.connection) try {
		this.connection.onclose = null, this.connection.close()
	} catch (e) {}
	this.connection = window.WebSocket ? new WebSocket(this.url) : {}, watt.emit("created", [window.socket]), this.connection.onmessage = function(e) {
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
}, Socket.prototype.reconnect = function(e) {
	clearInterval(window.retryConnect_timer);
	var t = this;
	window.retryConnect_timer = setInterval(function() {
		retryConnect(t)
	}, e)
}, Socket.prototype.stopHeartBeat = function() {
	clearInterval(window.heartbeat_timer)
}, WebSocketClient.prototype = {
	onMessageListener: function(e) {
		window.onMsgListeners.push(e)
	},
	onOpenListener: function(e) {
		window.onOpenListeners.push(e)
	},
	onErrorListener: function(e) {
		window.onErrorListeners.push(e)
	},
	onCloseListener: function(e) {
		window.onCloseListeners.push(e)
	}
}, WebSocketClient.prototype.send = function(e) {
	this.socket.connection.send(e)
}, define("module/push_client", [], function() {}), define("module/cookie", [], function() {
	function e(e, t) {
		var n = arguments[2] ? arguments[2] : "";
		document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + n
	}

	function t(e) {
		for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
			var i = $.trim(n[r]);
			if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
		}
		return ""
	}

	function n(e, t, n) {
		if (n) {
			var r = new Date;
			r.setTime(r.getTime() + 1e3 * n), document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; expires=" + r.toGMTString()
		} else document.cookie = e + "=" + encodeURIComponent(t)
	}
	return {
		setCookie: e,
		getCookie: t,
		setCookieEx: n
	}
}), require.config({
	baseUrl: VM.STATIC_URL
}), define("module/kernel", [], function() {
	var e = window.wmNetworkApi,
		t = window.wmSystemApi;
	return window.wmPrinterApi, t && t.getAppInfo && t.getAppInfo(), new function() {
		this.getAppInfo = function() {
			return t && t.getAppInfo && t.getAppInfo() || {
				version: "",
				code: "0"
			}
		}, this.getSystemInfo = function() {
			return t && t.getSystemInfo && t.getSystemInfo() || {
				majorVersion: 0,
				minorVersion: 0
			}
		}, this.readFile = function(e) {
			return t && t.readFile ? t.readFile(e) : void 0
		}, this.writeFile = function(e, n, r) {
			return t && t.writeFile ? t.writeFile(e, n, r) : void 0
		}, this.fileExists = function(e) {
			return t && t.fileExists ? t.fileExists(e) : void 0
		}, this.directoryExists = function(e) {
			return t && t.directoryExists ? t.directoryExists(e) : void 0
		}, this.deleteFile = function(e) {
			return t && t.fileExists && t.deletePath ? t.fileExists(e) && t.deletePath(e) : void 0
		}, this.deleteDirectory = function(e) {
			return t && t.directoryExists && t.deletePath ? t.directoryExists(e) && t.deletePath(e) : void 0
		}, this.moveFile = function(e, n) {
			return t && t.moveFile ? t.moveFile(e, n) : void 0
		}, this.copyFile = function(e, n) {
			return t && t.copyFile ? t.copyFile(e, n) : void 0
		}, this.fileInfo = function(e) {
			return t && t.fileInfo ? t.fileInfo(e) : void 0
		}, this.directoryInfo = function(e) {
			return t && t.directoryInfo ? t.directoryInfo(e) : void 0
		}, this.download = function(t, n, r) {
			return e && e.download ? e.download(t, n, r) : void 0
		}, this.executeCommand = function(e) {
			return t && t.executeCommand ? t.executeCommand(e) : void 0
		}, this.getSpecialFolder = function(e) {
			return t && t.getSpecialFolder ? t.getSpecialFolder(e) : void 0
		}, this.parseFilePath = function(e) {
			return t && t.parseFilePath ? t.parseFilePath(e) : void 0
		}
	}
}), define("page/widgets/crash_log_reporter", ["module/cookie", "module/kernel"], function(e, t) {
	function n() {
		var e = "{f:COMMON_APPDATA}\\waimai\\running_log",
			n = t.readFile(e);
		if (n) {
			var r = [];
			$(n.split("\n")).each(function(e, t) {
				t = t.replace(/^\s+|\s+$/g, "");
				if (t == "") return;
				var n = {};
				$(t.match(/[^:\s]*:[^,\s]*/g)).each(function(e, t) {
					var r = t.indexOf(":"),
						e = t.substr(0, r),
						i = t.substr(r + 1);
					n[e] = i
				}), r.push(n)
			}), _nt.post(s + "/api/crash/log/batch", function(n) {
				n.httpSuccess && t.deleteFile(e)
			}, {
				list: JSON.stringify(r)
			})
		}
	}

	function r() {
		var n = "{f:COMMON_APPDATA}\\waimai\\trace",
			r = t.allFiles(n, "*.crash.dmp");
		if (r && r.length) {
			var i = _sys && _sys.getAppInfo && _sys.getAppInfo() || {},
				o = i.clientId,
				u = 0;
			$(r).each(function(n, r) {
				var i = r.lastIndexOf("\\"),
					a = r.substr(i + 1),
					f = r.substr(0, i);
				if (a.charAt("0") != "_") {
					if (u < 1) {
						var l = e.getCookie("wmPoiId"),
							c = e.getCookie("token");
						_nt.postFile(s + "/api/crash/data/file", function(e) {}, r, {
							clientId: o,
							time: (new Date).getTime(),
							sysInfo: JSON.stringify(t.getSystemInfo()),
							wmPoiId: l,
							token: c
						}, null, null, "zip"), u++
					}
					t.moveFile(r, f + "\\_" + a)
				}
			})
		}
	}

	function i(e) {
		try {
			e()
		} catch (t) {}
	}
	var s = "";
	return {
		report: function() {
			_nt && _nt.postFile && (i(n), i(r))
		}
	}
}), define("page/widgets/left-nav", ["module/cookie", "lib/jquery.zxxbox.3.0", "module/communicate", "util/template", "tpl/userHistoryOrderTpl", "page/widgets/audio", "module/push_client", "page/widgets/crash_log_reporter"], function(e, t, n, r, i, s, o, u) {
	function a() {
		var t = e.getCookie("wmPoiId"),
			n = e.getCookie("token"),
			r = e.getCookie("acctId");
		$.post("/api/order/unprocessedCount", {
			wmPoiId: t,
			acctId: r,
			appType: "3",
			token: n
		}, function(e) {
			if (e.code == 0) {
				var t = e.data.count;
				c(t)
			} else m.text(e.msg), v.zxxbox({
				title: "æç¤º"
			})
		})
	}

	function f(e) {
		var t = g(),
			n = t.length,
			r = e.length,
			i = [];
		for (var s = 0; s < r; s++) {
			var o = 0;
			for (var u = 0; u < n; u++) $(t[u]).attr("id") == e[s].wm_order_id_view_str && (o = 1);
			o == 0 && i.push(e[s])
		}
		return i
	}

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

	function c(t) {
		var n = document.getElementById("hashframe").contentWindow,
			r = n.document;
		t && parseInt(t) && parseInt(t) > 0 ? ($(".order-count").text("(" + t + ")"), audioPlay(), $(r).find(".order-count").text("(" + t + ")"), $(r).find("#J-no-order").hide(), e.setCookie("count", t)) : ($(".order-count").text(""), $(r).find(".order-count").text(""), audioReset(), $(r).find("#J-no-order").show(), e.setCookie("count", t))
	}

	function h(e, t, n) {
		$.post("/message/unread/count", {
			wmPoiId: e,
			acctId: n,
			appType: "3",
			token: t
		}, function(e) {
			if (e.code == 0) {
				var t = e.data;
				if (!t || t < 0) t = 0;
				p(t)
			} else $("#validateWarning").text(e.msg)
		})
	}

	function p(e) {
		e && parseInt(e) && parseInt(e) > 0 ? $(".message-count").text("(" + e + ")") : $(".message-count").text("")
	}

	function d() {
		$(".nav-link").click(function() {
			var e = $(this).data("link"),
				t = Math.random();
			window.location.hash = e + "&random=" + t, a(), $(this).siblings().removeClass("current"), $(this).addClass("current")
		})
	}
	var v = $("#J-error-msg"),
		m = $("#J-remind-text");
	window.getMsg = function(e) {
		e == "pushCount" && a()
	}, window.getLastOrderId = function() {
		var e = 0,
			t = document.getElementById("hashframe").contentWindow,
			n = t.document;
		return decodeURIComponent(t.location.pathname) == "/order/today/unprocessed" && (e = $(n).find(".content .order").last().attr("id")), e == undefined && (e = 0), e
	}, window.checkNewOrders = function(t) {
		var n = getLastOrderId(),
			r = e.getCookie("wmPoiId"),
			i = e.getCookie("token"),
			s = e.getCookie("acctId");
		l(r, i, s, n, t)
	};
	var g = function() {
			var e = document.getElementById("hashframe").contentWindow,
				t = e.document,
				n = $(t).find("#orders-container .order");
			return n
		};
	a(), checkNewOrders(), window.isGettingOrderData = !1, window.gettingOrderDataTime = 0, window.recordReceivePushMsg = function(t) {
		var n = e.getCookie("appVersion"),
			r = e.getCookie("wmPoiId"),
			i = e.getCookie("acctId"),
			s = new Array,
			o = new Object;
		o.code = t > 0 ? 50000001 : 50000002, o.result = 0, o.time = (new Date).getTime(), o.wmPoiId = r, o.acctId = i, o.info = t, s.push(o), $.post("/api/log/c", {
			appType: 3,
			appName: "PushClient",
			utm_term: n,
			logType: "C",
			wmLogEventList: JSON.stringify(s)
		}, function(e) {})
	}, d();
	try {
		u.report()
	} catch (y) {}
	return {
		updateOrderCount: c
	}
}), define("page/widgets/push_schedule", ["module/notification", "module/cookie", "module/push_client", "page/widgets/head-nav", "page/widgets/left-nav", "page/widgets/tips_append"], function(e, t, n, r, i, s) {
	function o(e) {
		window.socket_env == "dev" && console.log(e)
	}
	var u = t.getCookie("token"),
		a = new WebSocketClient("waimai_e", u);
	a.onOpenListener(function(e) {
		o("è¿žæŽ¥æœåŠ¡socketæˆåŠŸ")
	}), a.onCloseListener(function(e) {
		o("æœåŠ¡socketå·²å…³é—­")
	}), a.onErrorListener(function(e) {
		o("æœåŠ¡socketå‡ºé”™")
	}), a.onMessageListener(function(e) {
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
		t && t.code == 5 && s.assembleTip(t), t && t.code == 6 && s.assemblePreorder(t), t && t.code == 1e3 && updateReceivedCenterMsg()
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
}), define("module/general", ["page/widgets/footer", "page/widgets/tip", "page/widgets/push_schedule"], function() {}), define("page/widgets/updater", ["module/cookie", "module/notification"], function(e, t) {
	function i(e, n, r) {
		(new t({
			msg: e,
			type: n || "operation",
			duration: r || 2e3
		})).show()
	}

	function f() {
		function h() {
			r.height($(e).height()), f.css({
				left: ($(e).width() - f.width()) / 2,
				top: ($(e).height() - f.height()) / 3
			})
		}

		function v(e) {
			var t = Math.max(0, parseInt((d - e) / 1e3));
			if (t > 0) {
				function n(e) {
					return e < 10 ? "0" + e : e
				}
				var r = parseInt(t / 86400),
					i = (t %= 86400, parseInt(t / 3600)),
					s = (t %= 3600, parseInt(t / 60)),
					o = t % 60;
				$(".update-time-tip").text(r + "å¤© " + n(i) + ":" + n(s) + ":" + n(o))
			} else $(".update-time-prompt").text(""), $(".update-time-tip").text("å½“å‰ç‰ˆæœ¬å·²åœæ­¢ä½¿ç”¨"), a = !0, window.clearInterval(u)
		}
		l();
		var e = window.top,
			t = $(e.document.body),
			r = $('<div class="update-background"></div>').appendTo(t),
			f = $('<div class="update-frame"></div>').appendTo(t);
		$('<label class="update-close">Ã—</label>').appendTo(f).click(function() {
			a ? alert("å½“å‰ç‰ˆæœ¬å·²ç»åœæ­¢ä½¿ç”¨ï¼Œè¯·ç«‹å³å‡çº§åˆ°3.0") : l()
		}), $('<br /><h1 class="update-title">3.0å‡çº§æç¤ºï¼š<span class="update-time"><span class="update-time-prompt">ç¦»åœæ­¢ä½¿ç”¨è¿˜å‰© </span><span class="update-time-tip"></span></span></h1>').appendTo(f), $("<hr />").appendTo(f), $('<div class="update-body">    æ‚¨å½“å‰çš„ç‰ˆæœ¬è¿‡ä½Žï¼Œæˆ‘ä»¬å³å°†ç¦æ­¢æ—§ç‰ˆå®¢æˆ·ç«¯ç™»é™†ç³»ç»Ÿï¼Œä¸ºäº†ä¸å½±å“æ­£å¸¸æŽ¥å•ï¼Œè¯·ç«‹å³å‡çº§è‡³3.0æ–°ç‰ˆå®¢æˆ·ç«¯ã€‚<br /><br />    <ul>        <li>æ‚¨å¯ä»¥ç‚¹å‡»â€œä¸‹è½½å®‰è£…â€œï¼Œæˆ–è€…å°†ä¸‹é¢çš„åœ°å€å¤åˆ¶åˆ°æµè§ˆå™¨æˆ–å…¶å®ƒä¸‹è½½å·¥å…·æ¥ä¸‹è½½ã€‚</li>        <li id="download-url">ä¸‹è½½åœ°å€ï¼šhttp://e.waimai.meituan.com/file/pc/download</li>    </ul><br /></div>').appendTo(f), $("<hr />").appendTo(f);
		var c = $('<div class="update-buttons"></div>').appendTo(f);
		$('<button class="update-yes">ä¸‹è½½å®‰è£…</button>').appendTo(c).click(function() {
			a || l(), document.location.href = o
		}), $('<label class="update-tips">* ä¸‹è½½è¿‡ç¨‹å¤§çº¦éœ€è¦5ã€œ10åˆ†é’Ÿã€‚<br />* å®‰è£…åŒ…å¤§å°28.4Mï¼Œæ‚¨éœ€è¦è€å¿ƒç­‰å¾…ä¸‹è½½å®Œæ¯•å†å®‰è£…ã€‚</label>').appendTo(c), n && n.setClipBoardText && $('<a href="javascript:void(0)" class="update-button">ã€å¤åˆ¶åˆ°å‰ªè´´æ¿ã€‘</a>').click(function() {
			n.setClipBoardText(o), i("å·²å¤åˆ¶åˆ°å‰ªè´´æ¿ï¼Œæ‚¨å¯ä»¥ä½¿ç”¨æµè§ˆå™¨æˆ–å…¶å®ƒä¸‹è½½å·¥å…·æ¥ä¸‹è½½ã€‚")
		}).appendTo("#download-url"), h(), $(e).bind("resize", function() {
			h()
		}), s = [r, f];
		var p = (new Date).getTime(),
			d = Date.parse("12/29/2014");
		$.getJSON("/settings/getServerTime", function(e) {
			p = parseInt(e)
		}), u = window.setInterval(function() {
			v(p += 1e3)
		}, 1e3), v(p)
	}

	function l() {
		s && ($(s).each(function(e, t) {
			$(t).remove()
		}), s = null), u && (window.clearInterval(u), u = 0)
	}
	var n = window.wmSystemApi,
		r = n && n.getAppInfo && n.getAppInfo();
	(!r || r.code < 30) && e.getCookie("show-update-info") != "yes" && (f(), e.setCookieEx("show-update-info", "yes", 18e3));
	var s, o = "http://e.waimai.meituan.com/file/pc/download",
		u, a
}), require.config({
	baseUrl: VM.STATIC_URL,
	waitSeconds: 0
}), require(["module/ajax_util", "module/general", "module/cookie", "page/widgets/updater"], function(e, t, n) {
	var r = {
		"/order/today/unprocessed": "order",
		"/order/today/processed": "order",
		"/inshopOrder/add": "inshop",
		"/inshopOrder/hisList": "inshop",
		"/order/history/orders": "history",
		"/order/unresolved": "unresolved",
		"/order/unresolved/history": "unresolved",
		"/cfeedback/default": "guest",
		"/comment/default": "guest",
		"/foods/list": "food",
		"/foods/tag/list": "food",
		"/foods/recycle/list": "food",
		"/settings/poi": "shop",
		"/settings/poi#poi-section": "shop",
		"/settings/poi/area": "shop",
		"/settings/timeout": "shop",
		"/settings/verify": "shop",
		"/settings/activity": "shop",
		"/settings/periodPayment": "shop",
		"/paybill/detail": "shop",
		"/paybill/get": "shop",
		"/settings/qual": "shop",
		"/settings/shipping": "shop",
		"/order/charts": "statistic",
		"/order/charts/history": "statistic",
		"/order/charts/ordered/foods": "statistic",
		"/settings/sound": "system",
		"/settings/default": "system",
		"/feedback/list": "system",
		"/settings/msgbox": "system",
		"/settings/report": "system"
	};
	$.ajaxSetup({
		async: !1
	});
	var i = function() {
			var e = location.hash.substr(1);
			e == "" && $.post("/promise/workbench/view", function(t) {
				t.code == 0 ? e = "/promise/workbench" : e = "/order/today/unprocessed"
			});
			var t = r[e.split("?")[0]],
				n = $("[data-category=" + t + "]");
			n.siblings().removeClass("current"), n.addClass("current"), e && (s.document.location.href = e)
		};
	window.onhashchange = function() {
		i()
	};
	var s = window.frames.hashframe;
	i()
}), define("page/widgets/root", function() {});