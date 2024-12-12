

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    function protectSensitiveData() {
        var inputFields = document.getElementsByTagName('input');
        for (var ni = 0; ni < inputFields.length; ni++) {
            inputFields.item(ni).classList.add('inspectletIgnore');
        }
    }

    function include(file, id) {
        var script = document.createElement('script');
        script.src = file;
        script.id = id;
        script.type = 'text/javascript';
        script.defer = true;
        document.getElementsByTagName('head').item(0).appendChild(script);
    }


    var lead_typing_name = 'Lead/Order Form';
    let page_url;
    (function (d, f) {
        "use strict";
        var h = function (d) {
            if ("object" !== typeof d.document) throw Error("Cookies.js requires a `window` with a `document` object");
            var b = function (a, e, c) {
                return 1 === arguments.length ? b.get(a) : b.set(a, e, c)
            };
            b._document = d.document;
            b._cacheKeyPrefix = "cookey.";
            b._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC");
            b.defaults = {path: "/", secure: !1};
            b.get = function (a) {
                b._cachedDocumentCookie !== b._document.cookie && b._renewCache();
                a = b._cache[b._cacheKeyPrefix + a];
                return a === f ? f : decodeURIComponent(a)
            };
            b.set = function (a, e, c) {
                c = b._getExtendedOptions(c);
                c.expires = b._getExpiresDate(e === f ? -1 : c.expires);
                b._document.cookie = b._generateCookieString(a, e, c);
                return b
            };
            b.expire = function (a, e) {
                return b.set(a, f, e)
            };
            b._getExtendedOptions = function (a) {
                return {
                    path: a && a.path || b.defaults.path,
                    domain: a && a.domain || b.defaults.domain,
                    expires: a && a.expires || b.defaults.expires,
                    secure: a && a.secure !== f ? a.secure : b.defaults.secure
                }
            };
            b._isValidDate = function (a) {
                return "[object Date]" === Object.prototype.toString.call(a) && !isNaN(a.getTime())
            };
            b._getExpiresDate = function (a, e) {
                e = e || new Date;
                "number" === typeof a ? a = Infinity === a ? b._maxExpireDate : new Date(e.getTime() + 1E3 * a) : "string" === typeof a && (a = new Date(a));
                if (a && !b._isValidDate(a)) throw Error("`expires` parameter cannot be converted to a valid Date instance");
                return a
            };
            b._generateCookieString = function (a, b, c) {
                a = a.replace(/[^#$&+\^`|]/g, encodeURIComponent);
                a = a.replace(/\(/g, "%28").replace(/\)/g, "%29");
                b = (b + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
                c = c || {};
                a = a + "=" + b + (c.path ? ";path=" +
                    c.path : "");
                a += c.domain ? ";domain=" + c.domain : "";
                a += c.expires ? ";expires=" + c.expires.toUTCString() : "";
                return a += c.secure ? ";secure" : ""
            };
            b._getCacheFromString = function (a) {
                var e = {};
                a = a ? a.split("; ") : [];
                for (var c = 0; c < a.length; c++) {
                    var d = b._getKeyValuePairFromCookieString(a[c]);
                    e[b._cacheKeyPrefix + d.key] === f && (e[b._cacheKeyPrefix + d.key] = d.value)
                }
                return e
            };
            b._getKeyValuePairFromCookieString = function (a) {
                var b = a.indexOf("="), b = 0 > b ? a.length : b, c = a.substr(0, b), d;
                try {
                    d = decodeURIComponent(c)
                } catch (k) {
                    console && "function" ===
                    typeof console.error && console.error('Could not decode cookie with key "' + c + '"', k)
                }
                return {key: d, value: a.substr(b + 1)}
            };
            b._renewCache = function () {
                b._cache = b._getCacheFromString(b._document.cookie);
                b._cachedDocumentCookie = b._document.cookie
            };
            b._areEnabled = function () {
                var a = "1" === b.set("cookies.js", 1).get("cookies.js");
                b.expire("cookies.js");
                return a
            };
            b.enabled = b._areEnabled();
            return b
        }, g = d && "object" === typeof d.document ? h(d) : h;
        "function" === typeof define && define.amd ? define(function () {
            return g
        }) : "object" ===
        typeof exports ? ("object" === typeof module && "object" === typeof module.exports && (exports = module.exports = g), exports.Cookies = g) : d.Cookies = g
    })("undefined" === typeof window ? this : window);

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function getHiddenField(name, value) {
        var field = document.createElement('input');
        field.type = 'hidden';
        field.name = name;
        field.value = value;
        return field;
    }

    var getCookies = function () {
        var pairs = document.cookie.split("; ");
        var cookies = {};
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
        }
        return cookies;
    }

    function sendData(method, url, formData, response, error) {

        var XHR = new XMLHttpRequest();
        // Define what happens on successful data submission
        XHR.addEventListener('load', response);

        // Define what happens in case of error
        XHR.addEventListener('error', error);

        // Set up our request
        XHR.open(method, url, true);

        // Add the required HTTP header for form data POST requests
        XHR.setRequestHeader('treferer', document.referrer);
        XHR.setRequestHeader('vl', window.location.href);
        XHR.withCredentials = true;

        // Finally, send our data.
        XHR.send(formData);
    }

    sendData('get', "https://app.webblers.co/jstest", [], function () {
    }, function () {
    });
    window.setTimeout(function () {
        include("https://www.google.com/recaptcha/api.js?render=6Ld-vbscAAAAAP8xEknMmr3tiPrht3NJwXfdLbn0", '');
    },  7000
    );
    var forms = document.getElementsByClassName('leadform');
    for (var i = 0; i < forms.length; i++) {
        forms.item(i).action = "https://webblers.co/next-steps/go";
        forms.item(i).method = 'post';
        var source = forms.item(i).getAttribute('data-source');
        forms.item(i).removeAttribute('data-source');
        var field = getHiddenField('form_source', source);
        forms.item(i).appendChild(field);
        var fid = forms.item(i).getAttribute('data-fid');
        forms.item(i).removeAttribute('data-fid');
        field = getHiddenField('fid', fid);
        forms.item(i).appendChild(field);
        field = getHiddenField('full_page_url', window.location);
        forms.item(i).appendChild(field);
        const urlPieces = [location.protocol, '//', location.host, location.pathname];
        page_url = urlPieces.join('');
        field = getHiddenField('page_url', page_url);
        forms.item(i).appendChild(field);
    }
    //  protectSensitiveData();

    for (const [key, value] of Object.entries(params)) {
        Cookies.set(key, value);
    }


    for (const [key, value] of Object.entries(getCookies())) {

        var field = getHiddenField('qs[' + key + ']', value)
        var forms = document.getElementsByClassName('leadform');
        for (var i = 0; i < forms.length; i++) {
            forms.item(i).appendChild(field);
        }

    }

    document.addEventListener('submit', function (e) {
        if (e.target && (e.target.classList.contains('leadform') || e.target.classList.contains('second-step-leadform'))) {
            if (typeof iti != "undefined" && e.target.getElementsByClassName('p-validate').length > 0 && document.getElementsByClassName('phonevalidate')[0] !== undefined && e.target.getElementsByClassName('phonevalidate')[0].value.length > 0 && !iti[e.target.getElementsByClassName('p-validate')[0].getAttribute('data-iti')].isValidNumber()) {
                e.preventDefault();
                e.target.getElementsByClassName('valid-msg')[0].style.display = "block";
                return;
            }
            onSubmit(e);
        }
    });

    function onSubmit(e) {
        try {
            e.target.getElementsByClassName('lfmsg')[0].classList.add('d-none');
            e.target.getElementsByClassName('c_btn')[0].classList.add('show_loader');
            e.target.getElementsByClassName('c_btn')[0].disabled = true;
        } catch {

        }

        e.preventDefault();
        grecaptcha.ready(function () {
            grecaptcha.execute('6Ld-vbscAAAAAP8xEknMmr3tiPrht3NJwXfdLbn0', {action: 'submitcontact'}).then(function (token) {
                var tokenField = getHiddenField('gcaptcha', token)
                var tokenFieldFound = false;
                e.target.childNodes.forEach(function (childNode) {
                    try {
                        if (childNode.tagName.toLowerCase() == 'input' && childNode.type.toLowerCase() == 'hidden' && childNode.name.toLowerCase() == 'gcaptcha') {
                            childNode.value = token;
                            tokenFieldFound = true;
                        }
                    } catch (e) {

                    }
                })
                if (!tokenFieldFound) {
                    e.target.appendChild(tokenField);
                }


                

                if (e.target.classList.contains('lfcta')) {
                    var data = {};

                    for (var ei = 0; ei < e.target.elements.length; ei++) {
                        data[e.target.elements.item(ei).name] = e.target.elements.item(ei).value;
                    }


                    var response = function () {

                        var bodyclass = e.target.getElementsByClassName('lfbtn')[0].getAttribute('data-bodyclass');
                        if (bodyclass != null) {
                            document.getElementsByTagName('body')[0].classList.add(bodyclass)
                        }
                        var nextform = e.target.getElementsByClassName('lfbtn')[0].getAttribute('data-nextformid');
                        if (nextform == null) {
                            var data = JSON.parse(this.responseText);
                            if (data.redirect == true) {
                                e.target.getElementsByClassName('lfmsg')[0].innerText = 'Redirecting...';
                                e.target.getElementsByClassName('lfmsg')[0].classList.remove('d-none');
                                setTimeout(function () {
                                    window.location = data.url;
                                }, 1000);
                            } else {
                                e.target.getElementsByClassName('lfbtn')[0].classList.remove('show_loader');
                                e.target.getElementsByClassName('lfmsg')[0].innerText = data.message;
                                e.target.getElementsByClassName('lfmsg')[0].classList.remove('d-none');
                            }
                        } else {
                            e.target.style.display = "none";
                            var nextform = document.getElementById(nextform);
                            nextform.style.display = null;
                            var data = JSON.parse(this.responseText);
                            if (data.redirect == true) {
                                nextform.setAttribute('action', data.url.replace('/s/', '/go2/'));
                                nextform.setAttribute('method', 'post');
                            }


                        }


                    };
                    var error = function (data) {

                        e.target.getElementsByClassName('lfbtn')[0].classList.remove('show_loader');
                    };

                    var form = e.target;
                    var formData = new FormData(form);
                    sendData('post', form.getAttribute('action'), formData, response, error)
                    //e.target.submit();
                } else {
                    e.target.submit();
                }


                if (typeof data['name'] !== 'undefined') {
                    setName(data['name']);
                }
                if (typeof data['email'] !== 'undefined') {
                    setEmail(data['email']);
                }

                if (typeof data['phone'] !== 'undefined') {
                    setPhone(data['phone']);
                }
                if (typeof data['message'] !== 'undefined') {
                    setNotes(data['message']);
                }

            });
        });
    }


    var elements = document.getElementsByClassName("open_chat_btn");
    window.setTimeout(function () {
        
        
        
                include("https://static.zdassets.com/ekr/snippet.js?key=c18f57ee-d219-4bb4-90b1-a02aeaa10bcc", 'ze-snippet');

        
    },   7000
     );


    window.setTimeout(function () {

        var s_c_ut = '';

        if (s_c_ut == 1 && window.location.href.includes('payment_link')) {
            $zopim(function () {
                $zopim.livechat.window.hide();
            });
        }

    },   7500
     );


    var myFunction = function () {
                $zopim(function () {
            $zopim.livechat.window.show();
        });
            };


    function setName(name) {
        
        if (!name.includes(lead_typing_name))
            setCookie('name', name, 365);

                $zopim(function () {
            $zopim.livechat.setName(name);
        });
                    }

    function setEmail(email) {
                setCookie('email', email, 365);
                $zopim(function () {
            $zopim.livechat.setEmail(email);
        });
                    }

    function setPhone(phone) {
                setCookie('phone', phone, 365);

                $zopim(function () {
            $zopim.livechat.setPhone(phone);
        });
                    }


    function setNotes(note) {
                setCookie('note', note, 365);
        $zopim(function () {
            $zopim.livechat.setNotes(note);
        });
            }

        let intrvl;
    intrvl = window.setInterval(function () {
        if (typeof $zopim === 'function') {
            window.setTimeout(function () {
                if (typeof lead !== "undefined") {
                    setName(lead.name);
                    setEmail(lead.email);
                    setPhone(lead.phone);
                }
                var name, email, phone;
                if ((name = getCookie('name')) !== null) {
                    setName(name);
                }
                if ((email = getCookie('email')) !== null) {
                    setEmail(email);
                }
                if ((phone = getCookie('phone')) !== null) {
                    setPhone(phone);
                }

                if ((note = getCookie('note')) !== null) {
                    setNotes(note)
                }

            }, 4000);

            $zopim(function () {
                $zopim.livechat.setOnConnected(function (data) {
                    sendData('get', "https://app.webblers.co/jstest?cc=1", [], function () {
                    }, function () {
                    });
                    // Now you can use the 'visitorId' for further processing
                    //console.log(visitorId);
                    console.log(data);
                    console.log("i am connected...");
                });
            });
            window.clearInterval(intrvl);
        }


    }, 1000);
        let intrvl1;
    intrvl1 = window.setInterval(function () {
        if (typeof zE === 'function') {
            zE(function () {
                $zopim.livechat.setOnUnreadMsgs(function (numUnread) {
                    if (numUnread > 0 && !$zopim.livechat.window.getDisplay()) {
                        $zopim.livechat.window.show();
                    }
                })
            });
            sendData('get', "https://app.webblers.co/jstest?ci=1", [], function () {
            }, function () {
            });
            window.clearInterval(intrvl1);
        }


    }, 1000);


    document.querySelectorAll('[name="name"]').forEach(function (item) {
        item.addEventListener('keyup', function () {
            setName(lead_typing_name + " - " + this.value);
        })
    })
    document.querySelectorAll('[name="phone"]').forEach(function (item) {
        item.addEventListener('keyup', function () {
            setPhone(this.value);
        })
    })
    document.querySelectorAll('[name="email"]').forEach(function (item) {
        item.addEventListener('keyup', function () {
            // setName(lead_typing_name);
            setEmail(this.value);
        })
    })


    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }

    var style = document.createElement('style');
    style.innerHTML = '.grecaptcha-badge { left: 0 !important; width: 70px !important;bottom: 0px !important; }';
    document.body.append(style);

    window.ismobile = function () {
        let check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    var myInterval;
    window.addEventListener('focus', startTimer);
    window.addEventListener('blur', stopTimer);

    function startTimer() {
        myInterval = window.setInterval(function () {
            sendData('get', "https://app.webblers.co/jstest?p=1", [], function () {
            }, function () {
            });
        }, 10000);
    }

    function stopTimer() {
        window.clearInterval(myInterval);
    }

    startTimer();



