(function () {
    'use strict';

    if (window.plugin_kinopub_ready) return;
    window.plugin_kinopub_ready = true;

    var DEFAULT_API = 'https://api.service-kp.com';
    // Public OAuth credentials of the open-source Kodi client (quarckster/kodi.kino.pub).
    // Can be replaced with your own in settings (write to support@kino.pub to get a pair).
    var DEFAULT_CLIENT_ID = 'xbmc';
    var DEFAULT_CLIENT_SECRET = 'cgg3gtifu46urtfp2zp1nqtba0k2ezxh';

    var ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor"/>' +
        '</svg>';

    var auth_net = new Lampa.Reguest();

    /* ------------------------------------------------------------------ utils */

    function apiHost() {
        var host = (Lampa.Storage.get('kinopub_api_url', '') + '').replace(/\s/g, '').replace(/\/+$/, '');

        if (!host) return DEFAULT_API;
        if (host.indexOf('http') !== 0) host = 'https://' + host;

        return host;
    }

    function clientId() {
        return (Lampa.Storage.get('kinopub_client_id', '') + '').trim() || DEFAULT_CLIENT_ID;
    }

    function clientSecret() {
        return (Lampa.Storage.get('kinopub_client_secret', '') + '').trim() || DEFAULT_CLIENT_SECRET;
    }

    function esc(text) {
        return (text === undefined || text === null ? '' : text + '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function xhrJson(xhr) {
        var out = {};

        try {
            out = JSON.parse(xhr.responseText);
        }
        catch (e) {}

        return out || {};
    }

    function minutes(seconds) {
        return seconds ? Math.round(seconds / 60) + ' ' + Lampa.Lang.translate('kinopub_min') : '';
    }

    /* ------------------------------------------------------------------ lang */

    Lampa.Lang.add({
        kinopub_title: {
            ru: 'KinoPub',
            en: 'KinoPub',
            uk: 'KinoPub'
        },
        kinopub_watch: {
            ru: 'KinoPub',
            en: 'KinoPub',
            uk: 'KinoPub'
        },
        kinopub_min: {
            ru: 'мин',
            en: 'min',
            uk: 'хв'
        },
        kinopub_season: {
            ru: 'Сезон',
            en: 'Season',
            uk: 'Сезон'
        },
        kinopub_episodes: {
            ru: 'эпизодов',
            en: 'episodes',
            uk: 'епізодів'
        },
        kinopub_nofound: {
            ru: 'Ничего не найдено на KinoPub',
            en: 'Nothing found on KinoPub',
            uk: 'Нічого не знайдено на KinoPub'
        },
        kinopub_nolinks: {
            ru: 'Нет доступных ссылок для воспроизведения',
            en: 'No playable links available',
            uk: 'Немає доступних посилань для відтворення'
        },
        kinopub_connect_error: {
            ru: 'Ошибка соединения с KinoPub',
            en: 'KinoPub connection error',
            uk: 'Помилка з\'єднання з KinoPub'
        },
        kinopub_need_auth: {
            ru: 'Требуется авторизация в аккаунте kino.pub',
            en: 'You need to sign in to your kino.pub account',
            uk: 'Потрібна авторизація в акаунті kino.pub'
        },
        kinopub_get_code: {
            ru: 'Получить код',
            en: 'Get code',
            uk: 'Отримати код'
        },
        kinopub_auth_title: {
            ru: 'Активация устройства',
            en: 'Device activation',
            uk: 'Активація пристрою'
        },
        kinopub_auth_descr: {
            ru: 'Откройте на другом устройстве адрес и введите код:',
            en: 'Open this address on another device and enter the code:',
            uk: 'Відкрийте на іншому пристрої адресу та введіть код:'
        },
        kinopub_auth_success: {
            ru: 'KinoPub: авторизация выполнена',
            en: 'KinoPub: signed in successfully',
            uk: 'KinoPub: авторизація виконана'
        },
        kinopub_auth_error: {
            ru: 'Не удалось получить код авторизации',
            en: 'Failed to get an authorization code',
            uk: 'Не вдалося отримати код авторизації'
        },
        kinopub_auth_expired: {
            ru: 'Время активации истекло, попробуйте еще раз',
            en: 'Activation time expired, try again',
            uk: 'Час активації минув, спробуйте ще раз'
        },
        kinopub_settings_account: {
            ru: 'Аккаунт',
            en: 'Account',
            uk: 'Акаунт'
        },
        kinopub_settings_signin: {
            ru: 'Войти в аккаунт',
            en: 'Sign in',
            uk: 'Увійти в акаунт'
        },
        kinopub_settings_signin_descr: {
            ru: 'Активация через kino.pub/device',
            en: 'Activation via kino.pub/device',
            uk: 'Активація через kino.pub/device'
        },
        kinopub_settings_signout: {
            ru: 'Выйти из аккаунта',
            en: 'Sign out',
            uk: 'Вийти з акаунта'
        },
        kinopub_logout_confirm: {
            ru: 'Выйти из аккаунта KinoPub?',
            en: 'Sign out of the KinoPub account?',
            uk: 'Вийти з акаунта KinoPub?'
        },
        kinopub_yes: {
            ru: 'Да',
            en: 'Yes',
            uk: 'Так'
        },
        kinopub_no: {
            ru: 'Нет',
            en: 'No',
            uk: 'Ні'
        },
        kinopub_days: {
            ru: 'дн.',
            en: 'days',
            uk: 'дн.'
        },
        kinopub_stream_type: {
            ru: 'Тип потока',
            en: 'Stream type',
            uk: 'Тип потоку'
        },
        kinopub_stream_type_descr: {
            ru: 'HLS4 — рекомендуется, MP4 — прямые файлы',
            en: 'HLS4 is recommended, MP4 means direct files',
            uk: 'HLS4 — рекомендується, MP4 — прямі файли'
        },
        kinopub_quality: {
            ru: 'Качество по умолчанию',
            en: 'Default quality',
            uk: 'Якість за замовчуванням'
        },
        kinopub_quality_best: {
            ru: 'Максимальное',
            en: 'Best available',
            uk: 'Максимальна'
        },
        kinopub_sync: {
            ru: 'Отправлять прогресс просмотра',
            en: 'Send watch progress',
            uk: 'Надсилати прогрес перегляду'
        },
        kinopub_sync_descr: {
            ru: 'Синхронизация отметок просмотра с kino.pub',
            en: 'Sync watched marks with kino.pub',
            uk: 'Синхронізація позначок перегляду з kino.pub'
        },
        kinopub_api_url: {
            ru: 'Адрес API',
            en: 'API address',
            uk: 'Адреса API'
        },
        kinopub_client_id: {
            ru: 'Client ID (необязательно)',
            en: 'Client ID (optional)',
            uk: 'Client ID (необов\'язково)'
        },
        kinopub_client_secret: {
            ru: 'Client Secret (необязательно)',
            en: 'Client Secret (optional)',
            uk: 'Client Secret (необов\'язково)'
        },
        kinopub_search_results: {
            ru: 'Результаты поиска',
            en: 'Search results',
            uk: 'Результати пошуку'
        }
    });

    /* ------------------------------------------------------------------ account */

    var Account = {
        token: function () {
            return Lampa.Storage.get('kinopub_token', '') + '';
        },
        refreshToken: function () {
            return Lampa.Storage.get('kinopub_refresh', '') + '';
        },
        expires: function () {
            return parseInt(Lampa.Storage.get('kinopub_expires', '0'), 10) || 0;
        },
        logged: function () {
            return !!this.token();
        },
        save: function (data) {
            Lampa.Storage.set('kinopub_token', data.access_token || '');

            if (data.refresh_token) Lampa.Storage.set('kinopub_refresh', data.refresh_token);

            Lampa.Storage.set('kinopub_expires', Math.floor(Date.now() / 1000) + (parseInt(data.expires_in, 10) || 3600));
        },
        clear: function () {
            Lampa.Storage.set('kinopub_token', '');
            Lampa.Storage.set('kinopub_refresh', '');
            Lampa.Storage.set('kinopub_expires', '0');
        }
    };

    function refreshToken(done, fail) {
        var refresh = Account.refreshToken();

        if (!refresh) return fail();

        auth_net.silent(apiHost() + '/oauth2/token', function (data) {
            if (data && data.access_token) {
                Account.save(data);
                done();
            }
            else fail();
        }, function () {
            fail();
        }, 'grant_type=refresh_token&client_id=' + encodeURIComponent(clientId()) + '&client_secret=' + encodeURIComponent(clientSecret()) + '&refresh_token=' + encodeURIComponent(refresh), {
            dataType: 'json'
        });
    }

    /**
     * Запрос к API v1, при 401 разово обновляет токен и повторяет запрос
     */
    function api(network, path, done, fail, post) {
        function url() {
            return apiHost() + '/v1/' + path + (path.indexOf('?') >= 0 ? '&' : '?') + 'access_token=' + encodeURIComponent(Account.token());
        }

        network.silent(url(), done, function (xhr, status) {
            if (xhr && xhr.status == 401 && Account.refreshToken()) {
                refreshToken(function () {
                    network.silent(url(), done, function (x, s) {
                        fail(x, s);
                    }, post || false, {dataType: 'json'});
                }, function () {
                    Account.clear();
                    fail(xhr, 'unauthorized');
                });
            }
            else if (xhr && xhr.status == 401) {
                Account.clear();
                fail(xhr, 'unauthorized');
            }
            else fail(xhr, status);
        }, post || false, {
            dataType: 'json'
        });
    }

    function notifyDevice() {
        var software = 'Lampa';

        try {
            software = 'Lampa ' + (Lampa.Manifest.app_digital || '');
        }
        catch (e) {}

        api(auth_net, 'device/notify', function () {}, function () {},
            'title=' + encodeURIComponent('Lampa') +
            '&hardware=' + encodeURIComponent((window.navigator && window.navigator.platform) || 'TV') +
            '&software=' + encodeURIComponent(software)
        );
    }

    /**
     * OAuth device flow: показывает код, ждет подтверждения на kino.pub/device
     */
    function deviceAuth(onsuccess) {
        var enabled = Lampa.Controller.enabled().name;
        var poll_timer = null;
        var expire_timer = null;
        var closed = false;

        function finish(success) {
            if (closed) return;

            closed = true;

            clearInterval(poll_timer);
            clearTimeout(expire_timer);

            Lampa.Modal.close();
            Lampa.Controller.toggle(enabled);

            if (success) {
                Lampa.Noty.show(Lampa.Lang.translate('kinopub_auth_success'));

                notifyDevice();

                if (onsuccess) onsuccess();
            }
        }

        var creds = 'client_id=' + encodeURIComponent(clientId()) + '&client_secret=' + encodeURIComponent(clientSecret());

        auth_net.silent(apiHost() + '/oauth2/device', function (data) {
            if (!data || !data.code) {
                return Lampa.Noty.show('KinoPub: ' + ((data && (data.error_description || data.error)) || Lampa.Lang.translate('kinopub_auth_error')));
            }

            var html = $('<div>' +
                '<div class="kinopub-auth__text">' + Lampa.Lang.translate('kinopub_auth_descr') + '</div>' +
                '<div class="kinopub-auth__site">' + esc(data.verification_uri || 'https://kino.pub/device') + '</div>' +
                '<div class="kinopub-auth__code">' + esc(data.user_code) + '</div>' +
                '</div>');

            Lampa.Modal.open({
                title: Lampa.Lang.translate('kinopub_auth_title'),
                html: html,
                size: 'small',
                onBack: function () {
                    finish(false);
                }
            });

            expire_timer = setTimeout(function () {
                Lampa.Noty.show(Lampa.Lang.translate('kinopub_auth_expired'));
                finish(false);
            }, Math.max(60, parseInt(data.expires_in, 10) || 300) * 1000);

            poll_timer = setInterval(function () {
                auth_net.silent(apiHost() + '/oauth2/device', function (token) {
                    if (!closed && token && token.access_token) {
                        Account.save(token);
                        finish(true);
                    }
                }, function (xhr) {
                    if (closed) return;

                    var error = xhrJson(xhr);

                    if (error.error && error.error !== 'authorization_pending' && error.error !== 'slow_down') {
                        Lampa.Noty.show('KinoPub: ' + (error.error_description || error.error));
                        finish(false);
                    }
                }, 'grant_type=device_token&code=' + encodeURIComponent(data.code) + '&' + creds, {
                    dataType: 'json'
                });
            }, Math.max(5, parseInt(data.interval, 10) || 5) * 1000);
        }, function () {
            Lampa.Noty.show('KinoPub: ' + Lampa.Lang.translate('kinopub_auth_error'));
        }, 'grant_type=device_code&' + creds, {
            dataType: 'json'
        });
    }

    /* ------------------------------------------------------------------ streams */

    function fileUrl(file) {
        var prefer = Lampa.Storage.field('kinopub_stream_type') || 'hls4';
        var order = [prefer, 'hls4', 'hls2', 'hls', 'http'];

        for (var i = 0; i < order.length; i++) {
            if (file.url && file.url[order[i]]) return file.url[order[i]];
        }

        return '';
    }

    function qualityMap(files) {
        var map = {};

        (files || []).forEach(function (file) {
            var url = fileUrl(file);

            if (url) map[file.quality || '--'] = url;
        });

        return map;
    }

    function defaultUrl(map) {
        var prefer = Lampa.Storage.field('kinopub_quality') || 'best';

        if (prefer !== 'best' && map[prefer]) return map[prefer];

        var best_url = '';
        var best_value = -1;

        for (var quality in map) {
            var value = parseInt(quality, 10) || 0;

            if (value > best_value) {
                best_value = value;
                best_url = map[quality];
            }
        }

        return best_url;
    }

    function qualityLabels(files) {
        return (files || []).map(function (file) {
            return file.quality;
        }).filter(function (quality) {
            return !!quality;
        }).join(', ');
    }

    /**
     * Отправка прогресса просмотра на kino.pub через обертку над timeline handler
     */
    function attachSync(timeline, item_id, video, season) {
        if (!Lampa.Storage.field('kinopub_sync')) return;

        var original = timeline.handler;
        var last_sent = -1000;

        timeline.handler = function (percent, time, duration) {
            original(percent, time, duration);

            if (!time || !duration) return;
            if (Math.abs(time - last_sent) < 30) return;

            last_sent = time;

            var path = 'watching/marktime?id=' + item_id + '&video=' + video + '&time=' + Math.floor(time);

            if (season) path += '&season=' + season;

            api(auth_net, path, function () {}, function () {});
        };
    }

    /* ------------------------------------------------------------------ component */

    function component(object) {
        var network = new Lampa.Reguest();
        var scroll = new Lampa.Scroll({mask: true, over: true});
        var files = new Lampa.Explorer(object);

        var movie = object.movie || {};
        var stack = [];
        var last;
        var initialized = false;

        var comp = this;

        function norm(text) {
            return (text || '').toString().toLowerCase()
                .replace(/ё/g, 'е')
                .replace(/[^\wа-яa-z0-9]+/gi, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }

        function cardYear() {
            var date = movie.release_date || movie.first_air_date || '';

            return parseInt((date + '').slice(0, 4), 10) || 0;
        }

        function isTvCard() {
            return !!(movie.name || movie.original_name || movie.first_air_date);
        }

        function typeLabel(type) {
            var labels = {
                movie: 'Фильм',
                serial: 'Сериал',
                tvshow: 'ТВ-шоу',
                docuserial: 'Док. сериал',
                documovie: 'Док. фильм',
                concert: 'Концерт',
                '3d': '3D',
                '4k': '4K'
            };

            return labels[type] || type || '';
        }

        function scoreItem(item) {
            var titles = (item.title || '').split('/').map(function (part) {
                return norm(part);
            });

            var title_one = norm(movie.title || movie.name);
            var title_two = norm(movie.original_title || movie.original_name);
            var score = 0;

            if ((title_one && titles.indexOf(title_one) >= 0) || (title_two && titles.indexOf(title_two) >= 0)) score += 100;

            var year = cardYear();

            if (year && item.year) {
                var diff = Math.abs(item.year - year);

                if (diff === 0) score += 50;
                else if (diff === 1) score += 25;
                else score -= diff * 5;
            }

            var is_serial = ['serial', 'docuserial', 'tvshow'].indexOf(item.type) >= 0;

            score += isTvCard() === is_serial ? 20 : -20;

            return score;
        }

        function episodeHash(season_number, episode_number) {
            var original = movie.original_name || movie.original_title || movie.title || movie.name || '';

            return Lampa.Utils.hash([season_number, season_number > 10 ? ':' : '', episode_number, original].join(''));
        }

        function movieHash() {
            return Lampa.Utils.hash((movie.original_title || movie.title || '') + '');
        }

        function seedTimeline(timeline, media) {
            var remote = media.watching;

            if (timeline.percent <= 0 && remote && remote.time > 30 && media.duration) {
                timeline.time = remote.time;
                timeline.duration = media.duration;
                timeline.percent = Math.round(remote.time / media.duration * 100);
            }
        }

        function subtitles(media) {
            if (!media.subtitles || !media.subtitles.length) return false;

            return media.subtitles.map(function (sub, index) {
                return {
                    label: sub.lang || ('#' + (index + 1)),
                    url: sub.url
                };
            });
        }

        this.create = function () {
            return this.render();
        };

        this.render = function () {
            return files.render();
        };

        this.loading = function (status) {
            if (!this.activity) return;

            this.activity.loader(status);

            if (!status) this.activity.toggle();
        };

        this.reset = function () {
            last = false;

            scroll.clear();
            scroll.reset();
        };

        this.addRow = function (element, onEnter) {
            element.on('hover:focus', function (event) {
                last = event.target;

                scroll.update($(event.target), true);
            }).on('hover:enter', function () {
                if (onEnter) onEnter();
            });

            scroll.append(element);
        };

        this.push = function (state) {
            stack.push(state);
            this.draw(state);
        };

        this.draw = function (state) {
            this.reset();

            state.render();

            this.loading(false);
        };

        this.empty = function (descr) {
            var empty = new Lampa.Empty({descr: descr});

            if (files.clearFiles) files.clearFiles();

            files.appendFiles(empty.render());

            this.start = empty.start.bind(empty);

            this.loading(false);
        };

        this.authScreen = function () {
            var empty = new Lampa.Empty({
                descr: Lampa.Lang.translate('kinopub_need_auth'),
                buttons: [{
                    title: Lampa.Lang.translate('kinopub_get_code'),
                    onEnter: function () {
                        deviceAuth(function () {
                            Lampa.Activity.replace();
                        });
                    }
                }]
            });

            if (files.clearFiles) files.clearFiles();

            files.appendFiles(empty.render());

            this.start = empty.start.bind(empty);

            this.loading(false);
        };

        this.initialize = function () {
            scroll.body().addClass('kinopub-list');

            files.appendFiles(scroll.render());

            this.activity.loader(true);

            if (!Account.logged()) return this.authScreen();

            var expires = Account.expires();

            if (Account.refreshToken() && expires && expires < Math.floor(Date.now() / 1000) + 120) {
                refreshToken(this.search.bind(this), this.search.bind(this));
            }
            else this.search();
        };

        this.search = function () {
            var queries = [];
            var title_one = ((movie.title || movie.name || '') + '').trim();
            var title_two = ((movie.original_title || movie.original_name || '') + '').trim();

            if (title_one) queries.push(title_one);
            if (title_two && title_two.toLowerCase() !== title_one.toLowerCase()) queries.push(title_two);
            if (!queries.length && object.search) queries.push(object.search);

            var results = [];

            function done() {
                comp.results(results);
            }

            function next() {
                if (!queries.length) return done();

                var query = queries.shift();

                api(network, 'items/search?q=' + encodeURIComponent(query) + '&field=title&perpage=50', function (data) {
                    ((data && data.items) || []).forEach(function (item) {
                        var exists = results.some(function (found) {
                            return found.id == item.id;
                        });

                        if (!exists) results.push(item);
                    });

                    if (results.length) done();
                    else next();
                }, function (xhr, status) {
                    if (status === 'unauthorized') comp.authScreen();
                    else if (queries.length) next();
                    else if (results.length) done();
                    else comp.empty(Lampa.Lang.translate('kinopub_connect_error'));
                });
            }

            next();
        };

        this.results = function (items) {
            if (!items.length) return this.empty(Lampa.Lang.translate('kinopub_nofound'));

            items.forEach(function (item) {
                item._score = scoreItem(item);
            });

            items.sort(function (a, b) {
                return b._score - a._score;
            });

            var state = {
                render: function () {
                    comp.drawResults(items);
                }
            };

            // При уверенном совпадении (точное название + год) открываем сразу,
            // список результатов остается в стеке и доступен по кнопке "назад"
            if (items[0]._score >= 150) {
                stack.push(state);

                this.openItem(items[0]);
            }
            else this.push(state);
        };

        this.drawResults = function (items) {
            items.forEach(function (item) {
                var info = [];

                if (item.year) info.push(item.year);
                if (item.type) info.push(typeLabel(item.type));
                if (item.imdb_rating) info.push('IMDb ' + item.imdb_rating);
                if (item.kinopoisk_rating) info.push('КП ' + parseFloat(item.kinopoisk_rating).toFixed(1));

                var element = $('<div class="kinopub-item selector">' +
                    '<div class="kinopub-item__title">' + esc(item.title) + '</div>' +
                    '<div class="kinopub-item__info">' + esc(info.join(' · ')) + '</div>' +
                    '</div>');

                comp.addRow(element, function () {
                    comp.openItem(item);
                });
            });
        };

        this.openItem = function (item) {
            this.activity.loader(true);

            api(network, 'items/' + item.id, function (data) {
                var full = data && data.item;

                if (!full) return comp.empty(Lampa.Lang.translate('kinopub_nolinks'));

                if (full.seasons && full.seasons.length) {
                    if (full.seasons.length > 1) {
                        comp.push({
                            render: function () {
                                comp.drawSeasons(full);
                            }
                        });
                    }
                    else {
                        comp.push({
                            render: function () {
                                comp.drawEpisodes(full, full.seasons[0]);
                            }
                        });
                    }
                }
                else if (full.videos && full.videos.length) {
                    comp.push({
                        render: function () {
                            comp.drawVideos(full);
                        }
                    });
                }
                else comp.empty(Lampa.Lang.translate('kinopub_nolinks'));
            }, function (xhr, status) {
                if (status === 'unauthorized') comp.authScreen();
                else comp.empty(Lampa.Lang.translate('kinopub_connect_error'));
            });
        };

        this.drawSeasons = function (full) {
            full.seasons.forEach(function (season) {
                var watched = season.episodes.filter(function (episode) {
                    return episode.watching && episode.watching.status == 1;
                }).length;

                var info = season.episodes.length + ' ' + Lampa.Lang.translate('kinopub_episodes');

                if (watched) info += ' · ✓ ' + watched;

                var element = $('<div class="kinopub-item selector">' +
                    '<div class="kinopub-item__title">' + Lampa.Lang.translate('kinopub_season') + ' ' + season.number + '</div>' +
                    '<div class="kinopub-item__info">' + esc(info) + '</div>' +
                    '</div>');

                comp.addRow(element, function () {
                    comp.push({
                        render: function () {
                            comp.drawEpisodes(full, season);
                        }
                    });
                });
            });
        };

        this.drawEpisodes = function (full, season) {
            season.episodes.forEach(function (episode) {
                var timeline = Lampa.Timeline.view(episodeHash(season.number, episode.number));

                seedTimeline(timeline, episode);

                var number = 'S' + season.number + 'E' + episode.number;
                var info = [];

                if (episode.duration) info.push(minutes(episode.duration));

                var qualities = qualityLabels(episode.files);

                if (qualities) info.push(qualities);
                if (episode.watching && episode.watching.status == 1) info.push('✓');

                var element = $('<div class="kinopub-item selector">' +
                    '<div class="kinopub-item__title">' + esc(number + (episode.title ? ' · ' + episode.title : '')) + '</div>' +
                    '<div class="kinopub-item__info">' + esc(info.join(' · ')) + '</div>' +
                    '<div class="kinopub-item__timeline"></div>' +
                    '</div>');

                element.find('.kinopub-item__timeline').append(Lampa.Timeline.render(timeline));

                comp.addRow(element, function () {
                    comp.playEpisode(full, season, episode);
                });
            });
        };

        this.drawVideos = function (full) {
            full.videos.forEach(function (video) {
                var timeline = full.videos.length > 1
                    ? Lampa.Timeline.view(Lampa.Utils.hash([video.number, movie.original_title || movie.title].join('')))
                    : Lampa.Timeline.view(movieHash());

                seedTimeline(timeline, video);

                var info = [];

                if (video.duration) info.push(minutes(video.duration));

                var qualities = qualityLabels(video.files);

                if (qualities) info.push(qualities);
                if (video.watching && video.watching.status == 1) info.push('✓');

                var title = full.videos.length > 1 ? (video.title || 'Видео ' + video.number) : (movie.title || full.title);

                var element = $('<div class="kinopub-item selector">' +
                    '<div class="kinopub-item__title">' + esc(title) + '</div>' +
                    '<div class="kinopub-item__info">' + esc(info.join(' · ')) + '</div>' +
                    '<div class="kinopub-item__timeline"></div>' +
                    '</div>');

                element.find('.kinopub-item__timeline').append(Lampa.Timeline.render(timeline));

                comp.addRow(element, function () {
                    var map = qualityMap(video.files);
                    var url = defaultUrl(map);

                    if (!url) return Lampa.Noty.show(Lampa.Lang.translate('kinopub_nolinks'));

                    attachSync(timeline, full.id, video.number || 1, 0);

                    Lampa.Player.play({
                        url: url,
                        quality: map,
                        timeline: timeline,
                        title: title,
                        card: movie,
                        subtitles: subtitles(video)
                    });
                });
            });
        };

        this.playEpisode = function (full, season, episode) {
            var playlist = [];
            var start = 0;

            season.episodes.forEach(function (entry, index) {
                var map = qualityMap(entry.files);
                var url = defaultUrl(map);

                if (!url) return;

                var timeline = Lampa.Timeline.view(episodeHash(season.number, entry.number));

                seedTimeline(timeline, entry);
                attachSync(timeline, full.id, entry.number, season.number);

                if (entry.number == episode.number) start = playlist.length;

                playlist.push({
                    url: url,
                    quality: map,
                    timeline: timeline,
                    title: 'S' + season.number + 'E' + entry.number + (entry.title ? ' · ' + entry.title : ''),
                    card: movie,
                    subtitles: subtitles(entry)
                });
            });

            if (!playlist.length) return Lampa.Noty.show(Lampa.Lang.translate('kinopub_nolinks'));

            // Плейлист передается только через Player.playlist: встраивание его в
            // сам элемент (first.playlist) создает циклическую структуру, на которой
            // падает JSON.stringify при запуске внешнего плеера (Infuse и др.)
            Lampa.Player.play(playlist[start]);

            if (playlist.length > 1) Lampa.Player.playlist(playlist);
        };

        this.back = function () {
            if (stack.length > 1) {
                stack.pop();

                comp.draw(stack[stack.length - 1]);
            }
            else Lampa.Activity.backward();
        };

        this.start = function () {
            if (Lampa.Activity.active().activity !== this.activity) return;

            if (!initialized) {
                initialized = true;

                this.initialize();
            }

            Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(movie));

            Lampa.Controller.add('content', {
                toggle: function () {
                    Lampa.Controller.collectionSet(scroll.render(), files.render(true));
                    Lampa.Controller.collectionFocus(last || false, scroll.render(true));
                },
                up: function () {
                    if (Navigator.canmove('up')) Navigator.move('up');
                    else Lampa.Controller.toggle('head');
                },
                down: function () {
                    Navigator.move('down');
                },
                left: function () {
                    if (Navigator.canmove('left')) Navigator.move('left');
                    else Lampa.Controller.toggle('menu');
                },
                right: function () {
                    if (Navigator.canmove('right')) Navigator.move('right');
                },
                back: this.back
            });

            Lampa.Controller.toggle('content');
        };

        this.pause = function () {};

        this.stop = function () {};

        this.destroy = function () {
            network.clear();

            files.destroy();
            scroll.destroy();

            stack = [];
        };
    }

    /* ------------------------------------------------------------------ settings */

    var account_line = null;

    function accountLineUpdate() {
        if (!account_line) return;

        var name = account_line.find('.settings-param__name');
        var descr = account_line.find('.settings-param__descr');

        if (Account.logged()) {
            name.text(Lampa.Lang.translate('kinopub_settings_signout'));
            descr.text('...');

            api(auth_net, 'user', function (data) {
                if (!account_line) return;

                var user = data && data.user;
                var line = user ? user.username : '';

                if (user && user.subscription && user.subscription.days) {
                    line += ' · ' + Math.round(user.subscription.days) + ' ' + Lampa.Lang.translate('kinopub_days');
                }

                descr.text(line || 'kino.pub');
            }, function () {
                if (account_line) descr.text('kino.pub');
            });
        }
        else {
            name.text(Lampa.Lang.translate('kinopub_settings_signin'));
            descr.text(Lampa.Lang.translate('kinopub_settings_signin_descr'));
        }
    }

    function addSettings() {
        Lampa.SettingsApi.addComponent({
            component: 'kinopub',
            name: Lampa.Lang.translate('kinopub_title'),
            icon: ICON
        });

        Lampa.SettingsApi.addParam({
            component: 'kinopub',
            param: {
                name: 'kinopub_account_button',
                type: 'button'
            },
            field: {
                name: Lampa.Lang.translate('kinopub_settings_signin'),
                description: Lampa.Lang.translate('kinopub_settings_signin_descr')
            },
            onRender: function (item) {
                account_line = item;

                accountLineUpdate();
            },
            onChange: function () {
                if (Account.logged()) {
                    var enabled = Lampa.Controller.enabled().name;

                    Lampa.Select.show({
                        title: Lampa.Lang.translate('kinopub_logout_confirm'),
                        items: [
                            {title: Lampa.Lang.translate('kinopub_yes'), logout: true},
                            {title: Lampa.Lang.translate('kinopub_no')}
                        ],
                        onSelect: function (action) {
                            if (action.logout) {
                                Account.clear();
                                accountLineUpdate();
                            }

                            Lampa.Controller.toggle(enabled);
                        },
                        onBack: function () {
                            Lampa.Controller.toggle(enabled);
                        }
                    });
                }
                else {
                    deviceAuth(function () {
                        accountLineUpdate();
                    });
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'kinopub',
            param: {
                name: 'kinopub_stream_type',
                type: 'select',
                values: {
                    hls4: 'HLS4',
                    hls2: 'HLS2',
                    hls: 'HLS',
                    http: 'MP4'
                },
                default: 'hls4'
            },
            field: {
                name: Lampa.Lang.translate('kinopub_stream_type'),
                description: Lampa.Lang.translate('kinopub_stream_type_descr')
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'kinopub',
            param: {
                name: 'kinopub_quality',
                type: 'select',
                values: {
                    best: Lampa.Lang.translate('kinopub_quality_best'),
                    '2160p': '2160p',
                    '1080p': '1080p',
                    '720p': '720p',
                    '480p': '480p'
                },
                default: 'best'
            },
            field: {
                name: Lampa.Lang.translate('kinopub_quality')
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'kinopub',
            param: {
                name: 'kinopub_sync',
                type: 'trigger',
                default: true
            },
            field: {
                name: Lampa.Lang.translate('kinopub_sync'),
                description: Lampa.Lang.translate('kinopub_sync_descr')
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'kinopub',
            param: {
                name: 'kinopub_api_url',
                type: 'input',
                values: '',
                placeholder: DEFAULT_API,
                default: ''
            },
            field: {
                name: Lampa.Lang.translate('kinopub_api_url')
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'kinopub',
            param: {
                name: 'kinopub_client_id',
                type: 'input',
                values: '',
                placeholder: DEFAULT_CLIENT_ID,
                default: ''
            },
            field: {
                name: Lampa.Lang.translate('kinopub_client_id')
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'kinopub',
            param: {
                name: 'kinopub_client_secret',
                type: 'input',
                values: '',
                placeholder: '········',
                default: ''
            },
            field: {
                name: Lampa.Lang.translate('kinopub_client_secret')
            }
        });
    }

    /* ------------------------------------------------------------------ card button */

    function addButton(event) {
        var render = event.object.activity.render();

        if (render.find('.kinopub--button').length) return;

        var movie = (event.data && event.data.movie) || (event.object && event.object.movie);

        if (!movie) return;

        var button = $('<div class="full-start__button selector view--kinopub kinopub--button">' +
            ICON +
            '<span>' + Lampa.Lang.translate('kinopub_watch') + '</span>' +
            '</div>');

        button.on('hover:enter', function () {
            Lampa.Activity.push({
                url: '',
                title: Lampa.Lang.translate('kinopub_title'),
                component: 'kinopub',
                movie: movie,
                page: 1,
                search: movie.title || movie.name
            });
        });

        var torrent = render.find('.view--torrent');

        if (torrent.length) torrent.after(button);
        else {
            var container = render.find('.buttons--container');

            if (container.length) container.append(button);
            else render.find('.full-start-new__buttons, .full-start__buttons').first().append(button);
        }
    }

    /* ------------------------------------------------------------------ start */

    function startPlugin() {
        Lampa.Manifest.plugins = {
            type: 'video',
            version: '1.0.1',
            name: 'KinoPub',
            description: 'Просмотр фильмов и сериалов с kino.pub',
            component: 'kinopub'
        };

        if (!$('#kinopub_style').length) {
            $('body').append(
                '<style id="kinopub_style">' +
                '.kinopub-item{position:relative;padding:1em 1.2em;border-radius:.3em;background-color:rgba(0,0,0,0.3);margin-bottom:1em}' +
                '.kinopub-item__title{font-size:1.3em}' +
                '.kinopub-item__info{font-size:1em;opacity:.7;margin-top:.3em}' +
                '.kinopub-item__timeline{margin-top:.8em}' +
                '.kinopub-item__timeline:empty{display:none}' +
                '.kinopub-item.focus,.kinopub-item.hover{background-color:#fff;color:#000}' +
                '.kinopub-auth__text{text-align:center}' +
                '.kinopub-auth__site{text-align:center;opacity:.8;margin-top:.8em}' +
                '.kinopub-auth__code{text-align:center;font-size:2.6em;font-weight:600;letter-spacing:.1em;margin:.3em 0}' +
                '</style>'
            );
        }

        addSettings();

        Lampa.Component.add('kinopub', component);

        Lampa.Listener.follow('full', function (event) {
            if (event.type == 'complite') addButton(event);
        });
    }

    if (window.appready) startPlugin();
    else {
        Lampa.Listener.follow('app', function (event) {
            if (event.type == 'ready') startPlugin();
        });
    }
})();
