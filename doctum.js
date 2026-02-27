var Doctum = {
    treeJson: {"tree":{"l":0,"n":"","p":"","c":[{"l":1,"n":"Drupal","p":"Drupal","c":[{"l":2,"n":"o365","p":"Drupal/o365","c":[{"l":3,"n":"Block","p":"Drupal/o365/Block","c":[{"l":4,"n":"O365BlockBase","p":"Drupal/o365/Block/O365BlockBase"},{"l":4,"n":"O365UncachedBlockBase","p":"Drupal/o365/Block/O365UncachedBlockBase"}]},{"l":3,"n":"Controller","p":"Drupal/o365/Controller","c":[{"l":4,"n":"O365AuthScopesController","p":"Drupal/o365/Controller/O365AuthScopesController"},{"l":4,"n":"O365ConnectorListBuilder","p":"Drupal/o365/Controller/O365ConnectorListBuilder"}]},{"l":3,"n":"Entity","p":"Drupal/o365/Entity","c":[{"l":4,"n":"O365Connector","p":"Drupal/o365/Entity/O365Connector"}]},{"l":3,"n":"EventSubscriber","p":"Drupal/o365/EventSubscriber","c":[{"l":4,"n":"RoleEventSubscriber","p":"Drupal/o365/EventSubscriber/RoleEventSubscriber"}]},{"l":3,"n":"Form","p":"Drupal/o365/Form","c":[{"l":4,"n":"DebuggerForm","p":"Drupal/o365/Form/DebuggerForm"},{"l":4,"n":"O365ConnectorDeleteForm","p":"Drupal/o365/Form/O365ConnectorDeleteForm"},{"l":4,"n":"O365ConnectorForm","p":"Drupal/o365/Form/O365ConnectorForm"},{"l":4,"n":"RoleSettingsForm","p":"Drupal/o365/Form/RoleSettingsForm"},{"l":4,"n":"SettingsForm","p":"Drupal/o365/Form/SettingsForm"}]},{"l":3,"n":"Plugin","p":"Drupal/o365/Plugin","c":[{"l":4,"n":"Oauth2Client","p":"Drupal/o365/Plugin/Oauth2Client","c":[{"l":5,"n":"O365OAuth2Client","p":"Drupal/o365/Plugin/Oauth2Client/O365OAuth2Client"}]}]},{"l":3,"n":"AuthenticationService","p":"Drupal/o365/AuthenticationService"},{"l":3,"n":"AuthenticationServiceInterface","p":"Drupal/o365/AuthenticationServiceInterface"},{"l":3,"n":"ConstantsService","p":"Drupal/o365/ConstantsService"},{"l":3,"n":"GraphService","p":"Drupal/o365/GraphService"},{"l":3,"n":"HelperService","p":"Drupal/o365/HelperService"},{"l":3,"n":"O365ConnectorAccessControlHandler","p":"Drupal/o365/O365ConnectorAccessControlHandler"},{"l":3,"n":"O365ConnectorInterface","p":"Drupal/o365/O365ConnectorInterface"},{"l":3,"n":"O365LoggerService","p":"Drupal/o365/O365LoggerService"},{"l":3,"n":"O365LoggerServiceInterface","p":"Drupal/o365/O365LoggerServiceInterface"},{"l":3,"n":"PersonaRenderService","p":"Drupal/o365/PersonaRenderService"},{"l":3,"n":"RolesService","p":"Drupal/o365/RolesService"}]},{"l":2,"n":"o365_contacts","p":"Drupal/o365_contacts","c":[{"l":3,"n":"Controller","p":"Drupal/o365_contacts/Controller","c":[{"l":4,"n":"O365ContactsController","p":"Drupal/o365_contacts/Controller/O365ContactsController"}]},{"l":3,"n":"Form","p":"Drupal/o365_contacts/Form","c":[{"l":4,"n":"SearchContactForm","p":"Drupal/o365_contacts/Form/SearchContactForm"}]},{"l":3,"n":"Plugin","p":"Drupal/o365_contacts/Plugin","c":[{"l":4,"n":"Block","p":"Drupal/o365_contacts/Plugin/Block","c":[{"l":5,"n":"SearchContactBlock","p":"Drupal/o365_contacts/Plugin/Block/SearchContactBlock"}]}]}]},{"l":2,"n":"o365_groups","p":"Drupal/o365_groups","c":[{"l":3,"n":"Access","p":"Drupal/o365_groups/Access","c":[{"l":4,"n":"O365GroupsFilesControllerAccessCheck","p":"Drupal/o365_groups/Access/O365GroupsFilesControllerAccessCheck"}]},{"l":3,"n":"Controller","p":"Drupal/o365_groups/Controller","c":[{"l":4,"n":"O365GroupsFilesController","p":"Drupal/o365_groups/Controller/O365GroupsFilesController"}]},{"l":3,"n":"Form","p":"Drupal/o365_groups/Form","c":[{"l":4,"n":"O365GroupsTeamsConnectForm","p":"Drupal/o365_groups/Form/O365GroupsTeamsConnectForm"}]},{"l":3,"n":"GroupFilesService","p":"Drupal/o365_groups/GroupFilesService"},{"l":3,"n":"GroupsService","p":"Drupal/o365_groups/GroupsService"}]},{"l":2,"n":"o365_links","p":"Drupal/o365_links","c":[{"l":3,"n":"Form","p":"Drupal/o365_links/Form","c":[{"l":4,"n":"SettingsForm","p":"Drupal/o365_links/Form/SettingsForm"}]},{"l":3,"n":"Plugin","p":"Drupal/o365_links/Plugin","c":[{"l":4,"n":"Block","p":"Drupal/o365_links/Plugin/Block","c":[{"l":5,"n":"O365LinksBlock","p":"Drupal/o365_links/Plugin/Block/O365LinksBlock"}]}]},{"l":3,"n":"O365CacheInvalidator","p":"Drupal/o365_links/O365CacheInvalidator"},{"l":3,"n":"O365LinksConstants","p":"Drupal/o365_links/O365LinksConstants"}]},{"l":2,"n":"o365_onedrive","p":"Drupal/o365_onedrive","c":[{"l":3,"n":"Controller","p":"Drupal/o365_onedrive/Controller","c":[{"l":4,"n":"OneDriveListController","p":"Drupal/o365_onedrive/Controller/OneDriveListController"}]},{"l":3,"n":"Plugin","p":"Drupal/o365_onedrive/Plugin","c":[{"l":4,"n":"Block","p":"Drupal/o365_onedrive/Plugin/Block","c":[{"l":5,"n":"RecentFilesBlock","p":"Drupal/o365_onedrive/Plugin/Block/RecentFilesBlock"},{"l":5,"n":"SharedFilesBlock","p":"Drupal/o365_onedrive/Plugin/Block/SharedFilesBlock"}]}]},{"l":3,"n":"GetFilesAndFoldersService","p":"Drupal/o365_onedrive/GetFilesAndFoldersService"},{"l":3,"n":"GetFilesAndFoldersServiceInterface","p":"Drupal/o365_onedrive/GetFilesAndFoldersServiceInterface"}]},{"l":2,"n":"o365_outlook_calendar","p":"Drupal/o365_outlook_calendar","c":[{"l":3,"n":"Controller","p":"Drupal/o365_outlook_calendar/Controller","c":[{"l":4,"n":"OutlookCalendarSaveAjaxController","p":"Drupal/o365_outlook_calendar/Controller/OutlookCalendarSaveAjaxController"}]},{"l":3,"n":"Form","p":"Drupal/o365_outlook_calendar/Form","c":[{"l":4,"n":"OutlookCalendarSettingsForm","p":"Drupal/o365_outlook_calendar/Form/OutlookCalendarSettingsForm"}]},{"l":3,"n":"Plugin","p":"Drupal/o365_outlook_calendar/Plugin","c":[{"l":4,"n":"Block","p":"Drupal/o365_outlook_calendar/Plugin/Block","c":[{"l":5,"n":"AddToCalendarBlock","p":"Drupal/o365_outlook_calendar/Plugin/Block/AddToCalendarBlock"},{"l":5,"n":"CalendarBlock","p":"Drupal/o365_outlook_calendar/Plugin/Block/CalendarBlock"}]}]},{"l":3,"n":"OutlookCalendarSaveEventService","p":"Drupal/o365_outlook_calendar/OutlookCalendarSaveEventService"}]},{"l":2,"n":"o365_outlook_mail","p":"Drupal/o365_outlook_mail","c":[{"l":3,"n":"Controller","p":"Drupal/o365_outlook_mail/Controller","c":[{"l":4,"n":"MyMailController","p":"Drupal/o365_outlook_mail/Controller/MyMailController"}]},{"l":3,"n":"Plugin","p":"Drupal/o365_outlook_mail/Plugin","c":[{"l":4,"n":"Block","p":"Drupal/o365_outlook_mail/Plugin/Block","c":[{"l":5,"n":"LatestMailBlock","p":"Drupal/o365_outlook_mail/Plugin/Block/LatestMailBlock"},{"l":5,"n":"LatestUnreadMailBlock","p":"Drupal/o365_outlook_mail/Plugin/Block/LatestUnreadMailBlock"}]}]},{"l":3,"n":"GetMailService","p":"Drupal/o365_outlook_mail/GetMailService"},{"l":3,"n":"GetMailServiceInterface","p":"Drupal/o365_outlook_mail/GetMailServiceInterface"}]},{"l":2,"n":"o365_profile","p":"Drupal/o365_profile","c":[{"l":3,"n":"Form","p":"Drupal/o365_profile/Form","c":[{"l":4,"n":"O365ProfileTeamsLinksConfigForm","p":"Drupal/o365_profile/Form/O365ProfileTeamsLinksConfigForm"}]},{"l":3,"n":"Plugin","p":"Drupal/o365_profile/Plugin","c":[{"l":4,"n":"Block","p":"Drupal/o365_profile/Plugin/Block","c":[{"l":5,"n":"PersonaBlock","p":"Drupal/o365_profile/Plugin/Block/PersonaBlock"},{"l":5,"n":"TeamsLinksBlock","p":"Drupal/o365_profile/Plugin/Block/TeamsLinksBlock"}]},{"l":4,"n":"views","p":"Drupal/o365_profile/Plugin/views","c":[{"l":5,"n":"field","p":"Drupal/o365_profile/Plugin/views/field","c":[{"l":6,"n":"CallViaTeamsViewsField","p":"Drupal/o365_profile/Plugin/views/field/CallViaTeamsViewsField"}]}]}]},{"l":3,"n":"O365ProfileGetDataService","p":"Drupal/o365_profile/O365ProfileGetDataService"},{"l":3,"n":"O365ProfileTeamsService","p":"Drupal/o365_profile/O365ProfileTeamsService"}]},{"l":2,"n":"o365_profile_rest","p":"Drupal/o365_profile_rest","c":[{"l":3,"n":"Plugin","p":"Drupal/o365_profile_rest/Plugin","c":[{"l":4,"n":"rest","p":"Drupal/o365_profile_rest/Plugin/rest","c":[{"l":5,"n":"resource","p":"Drupal/o365_profile_rest/Plugin/rest/resource","c":[{"l":6,"n":"O365ProfileRestResource","p":"Drupal/o365_profile_rest/Plugin/rest/resource/O365ProfileRestResource"}]}]}]}]},{"l":2,"n":"o365_rest","p":"Drupal/o365_rest","c":[{"l":3,"n":"Plugin","p":"Drupal/o365_rest/Plugin","c":[{"l":4,"n":"rest","p":"Drupal/o365_rest/Plugin/rest","c":[{"l":5,"n":"resource","p":"Drupal/o365_rest/Plugin/rest/resource","c":[{"l":6,"n":"GetAccessTokenResource","p":"Drupal/o365_rest/Plugin/rest/resource/GetAccessTokenResource"}]}]}]}]},{"l":2,"n":"o365_sharepoint_field","p":"Drupal/o365_sharepoint_field","c":[{"l":3,"n":"Controller","p":"Drupal/o365_sharepoint_field/Controller","c":[{"l":4,"n":"O365SharepointFieldController","p":"Drupal/o365_sharepoint_field/Controller/O365SharepointFieldController"}]},{"l":3,"n":"Plugin","p":"Drupal/o365_sharepoint_field/Plugin","c":[{"l":4,"n":"Field","p":"Drupal/o365_sharepoint_field/Plugin/Field","c":[{"l":5,"n":"FieldFormatter","p":"Drupal/o365_sharepoint_field/Plugin/Field/FieldFormatter","c":[{"l":6,"n":"SharePointSearchDefaultFormatter","p":"Drupal/o365_sharepoint_field/Plugin/Field/FieldFormatter/SharePointSearchDefaultFormatter"}]},{"l":5,"n":"FieldType","p":"Drupal/o365_sharepoint_field/Plugin/Field/FieldType","c":[{"l":6,"n":"SharePointSearchItem","p":"Drupal/o365_sharepoint_field/Plugin/Field/FieldType/SharePointSearchItem"}]},{"l":5,"n":"FieldWidget","p":"Drupal/o365_sharepoint_field/Plugin/Field/FieldWidget","c":[{"l":6,"n":"SharePointSearchWidget","p":"Drupal/o365_sharepoint_field/Plugin/Field/FieldWidget/SharePointSearchWidget"}]}]}]}]},{"l":2,"n":"o365_sharepoint_file","p":"Drupal/o365_sharepoint_file","c":[{"l":3,"n":"Controller","p":"Drupal/o365_sharepoint_file/Controller","c":[{"l":4,"n":"O365SharepointController","p":"Drupal/o365_sharepoint_file/Controller/O365SharepointController"}]},{"l":3,"n":"Form","p":"Drupal/o365_sharepoint_file/Form","c":[{"l":4,"n":"SearchSharepointForm","p":"Drupal/o365_sharepoint_file/Form/SearchSharepointForm"}]},{"l":3,"n":"Plugin","p":"Drupal/o365_sharepoint_file/Plugin","c":[{"l":4,"n":"Block","p":"Drupal/o365_sharepoint_file/Plugin/Block","c":[{"l":5,"n":"SharepointSearchBlock","p":"Drupal/o365_sharepoint_file/Plugin/Block/SharepointSearchBlock"}]}]}]},{"l":2,"n":"o365_sso","p":"Drupal/o365_sso","c":[{"l":3,"n":"Controller","p":"Drupal/o365_sso/Controller","c":[{"l":4,"n":"LoginCallbackController","p":"Drupal/o365_sso/Controller/LoginCallbackController"},{"l":4,"n":"LoginController","p":"Drupal/o365_sso/Controller/LoginController"},{"l":4,"n":"LogoutController","p":"Drupal/o365_sso/Controller/LogoutController"},{"l":4,"n":"UserLoginController","p":"Drupal/o365_sso/Controller/UserLoginController"}]},{"l":3,"n":"EventSubscriber","p":"Drupal/o365_sso/EventSubscriber","c":[{"l":4,"n":"RouteSubscriber","p":"Drupal/o365_sso/EventSubscriber/RouteSubscriber"}]},{"l":3,"n":"Form","p":"Drupal/o365_sso/Form","c":[{"l":4,"n":"SettingsForm","p":"Drupal/o365_sso/Form/SettingsForm"}]},{"l":3,"n":"Routing","p":"Drupal/o365_sso/Routing","c":[{"l":4,"n":"UserLoginFormRouteSubscriber","p":"Drupal/o365_sso/Routing/UserLoginFormRouteSubscriber"}]},{"l":3,"n":"O365CheckLoginAccess","p":"Drupal/o365_sso/O365CheckLoginAccess"}]},{"l":2,"n":"o365_sso_user","p":"Drupal/o365_sso_user","c":[{"l":3,"n":"EventSubscriber","p":"Drupal/o365_sso_user/EventSubscriber","c":[{"l":4,"n":"UserLoginEventSubscriber","p":"Drupal/o365_sso_user/EventSubscriber/UserLoginEventSubscriber"}]},{"l":3,"n":"Form","p":"Drupal/o365_sso_user/Form","c":[{"l":4,"n":"SettingsForm","p":"Drupal/o365_sso_user/Form/SettingsForm"}]},{"l":3,"n":"SsoUserSync","p":"Drupal/o365_sso_user/SsoUserSync"}]},{"l":2,"n":"o365_teams","p":"Drupal/o365_teams","c":[{"l":3,"n":"Controller","p":"Drupal/o365_teams/Controller","c":[{"l":4,"n":"TeamsRecipientAutocompleteController","p":"Drupal/o365_teams/Controller/TeamsRecipientAutocompleteController"}]},{"l":3,"n":"Form","p":"Drupal/o365_teams/Form","c":[{"l":4,"n":"O365TeamsSendMessageForm","p":"Drupal/o365_teams/Form/O365TeamsSendMessageForm"}]},{"l":3,"n":"O365TeamsSendMessageService","p":"Drupal/o365_teams/O365TeamsSendMessageService"}]}]}]},"treeOpenLevel":2},
    /** @var boolean */
    treeLoaded: false,
    /** @var boolean */
    listenersRegistered: false,
    autoCompleteData: null,
    /** @var boolean */
    autoCompleteLoading: false,
    /** @var boolean */
    autoCompleteLoaded: false,
    /** @var string|null */
    rootPath: null,
    /** @var string|null */
    autoCompleteDataUrl: null,
    /** @var HTMLElement|null */
    doctumSearchAutoComplete: null,
    /** @var HTMLElement|null */
    doctumSearchAutoCompleteProgressBarContainer: null,
    /** @var HTMLElement|null */
    doctumSearchAutoCompleteProgressBar: null,
    /** @var number */
    doctumSearchAutoCompleteProgressBarPercent: 0,
    /** @var autoComplete|null */
    autoCompleteJS: null,
    querySearchSecurityRegex: /([^0-9a-zA-Z:\\\\_\s])/gi,
    buildTreeNode: function (treeNode, htmlNode, treeOpenLevel) {
        var ulNode = document.createElement('ul');
        for (var childKey in treeNode.c) {
            var child = treeNode.c[childKey];
            var liClass = document.createElement('li');
            var hasChildren = child.hasOwnProperty('c');
            var nodeSpecialName = (hasChildren ? 'namespace:' : 'class:') + child.p.replace(/\//g, '_');
            liClass.setAttribute('data-name', nodeSpecialName);

            // Create the node that will have the text
            var divHd = document.createElement('div');
            var levelCss = child.l - 1;
            divHd.className = hasChildren ? 'hd' : 'hd leaf';
            divHd.style.paddingLeft = (hasChildren ? (levelCss * 18) : (8 + (levelCss * 18))) + 'px';
            if (hasChildren) {
                if (child.l <= treeOpenLevel) {
                    liClass.className = 'opened';
                }
                var spanIcon = document.createElement('span');
                spanIcon.className = 'icon icon-play';
                divHd.appendChild(spanIcon);
            }
            var aLink = document.createElement('a');

            // Edit the HTML link to work correctly based on the current depth
            aLink.href = Doctum.rootPath + child.p + '.html';
            aLink.innerText = child.n;
            divHd.appendChild(aLink);
            liClass.appendChild(divHd);

            // It has children
            if (hasChildren) {
                var divBd = document.createElement('div');
                divBd.className = 'bd';
                Doctum.buildTreeNode(child, divBd, treeOpenLevel);
                liClass.appendChild(divBd);
            }
            ulNode.appendChild(liClass);
        }
        htmlNode.appendChild(ulNode);
    },
    initListeners: function () {
        if (Doctum.listenersRegistered) {
            // Quick exit, already registered
            return;
        }
                Doctum.listenersRegistered = true;
    },
    loadTree: function () {
        if (Doctum.treeLoaded) {
            // Quick exit, already registered
            return;
        }
        Doctum.rootPath = document.body.getAttribute('data-root-path');
        Doctum.buildTreeNode(Doctum.treeJson.tree, document.getElementById('api-tree'), Doctum.treeJson.treeOpenLevel);

        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function () {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }
        Doctum.treeLoaded = true;
    },
    pagePartiallyLoaded: function (event) {
        Doctum.initListeners();
        Doctum.loadTree();
        Doctum.loadAutoComplete();
    },
    pageFullyLoaded: function (event) {
        // it may not have received DOMContentLoaded event
        Doctum.initListeners();
        Doctum.loadTree();
        Doctum.loadAutoComplete();
        // Fire the event in the search page too
        if (typeof DoctumSearch === 'object') {
            DoctumSearch.pageFullyLoaded();
        }
    },
    loadAutoComplete: function () {
        if (Doctum.autoCompleteLoaded) {
            // Quick exit, already loaded
            return;
        }
        Doctum.autoCompleteDataUrl = document.body.getAttribute('data-search-index-url');
        Doctum.doctumSearchAutoComplete = document.getElementById('doctum-search-auto-complete');
        Doctum.doctumSearchAutoCompleteProgressBarContainer = document.getElementById('search-progress-bar-container');
        Doctum.doctumSearchAutoCompleteProgressBar = document.getElementById('search-progress-bar');
        if (Doctum.doctumSearchAutoComplete !== null) {
            // Wait for it to be loaded
            Doctum.doctumSearchAutoComplete.addEventListener('init', function (_) {
                Doctum.autoCompleteLoaded = true;
                Doctum.doctumSearchAutoComplete.addEventListener('selection', function (event) {
                    // Go to selection page
                    window.location = Doctum.rootPath + event.detail.selection.value.p;
                });
                Doctum.doctumSearchAutoComplete.addEventListener('navigate', function (event) {
                    // Set selection in text box
                    if (typeof event.detail.selection.value === 'object') {
                        Doctum.doctumSearchAutoComplete.value = event.detail.selection.value.n;
                    }
                });
                Doctum.doctumSearchAutoComplete.addEventListener('results', function (event) {
                    Doctum.markProgressFinished();
                });
            });
        }
        // Check if the lib is loaded
        if (typeof autoComplete === 'function') {
            Doctum.bootAutoComplete();
        }
    },
    markInProgress: function () {
            Doctum.doctumSearchAutoCompleteProgressBarContainer.className = 'search-bar';
            Doctum.doctumSearchAutoCompleteProgressBar.className = 'progress-bar indeterminate';
            if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
                DoctumSearch.doctumSearchPageAutoCompleteProgressBarContainer.className = 'search-bar';
                DoctumSearch.doctumSearchPageAutoCompleteProgressBar.className = 'progress-bar indeterminate';
            }
    },
    markProgressFinished: function () {
        Doctum.doctumSearchAutoCompleteProgressBarContainer.className = 'search-bar hidden';
        Doctum.doctumSearchAutoCompleteProgressBar.className = 'progress-bar';
        if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
            DoctumSearch.doctumSearchPageAutoCompleteProgressBarContainer.className = 'search-bar hidden';
            DoctumSearch.doctumSearchPageAutoCompleteProgressBar.className = 'progress-bar';
        }
    },
    makeProgess: function () {
        Doctum.makeProgressOnProgressBar(
            Doctum.doctumSearchAutoCompleteProgressBarPercent,
            Doctum.doctumSearchAutoCompleteProgressBar
        );
        if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
            Doctum.makeProgressOnProgressBar(
                Doctum.doctumSearchAutoCompleteProgressBarPercent,
                DoctumSearch.doctumSearchPageAutoCompleteProgressBar
            );
        }
    },
    loadAutoCompleteData: function (query) {
        return new Promise(function (resolve, reject) {
            if (Doctum.autoCompleteData !== null) {
                resolve(Doctum.autoCompleteData);
                return;
            }
            Doctum.markInProgress();
            function reqListener() {
                Doctum.autoCompleteLoading = false;
                Doctum.autoCompleteData = JSON.parse(this.responseText).items;
                Doctum.markProgressFinished();

                setTimeout(function () {
                    resolve(Doctum.autoCompleteData);
                }, 50);// Let the UI render once before sending the results for processing. This gives time to the progress bar to hide
            }
            function reqError(err) {
                Doctum.autoCompleteLoading = false;
                Doctum.autoCompleteData = null;
                console.error(err);
                reject(err);
            }

            var oReq = new XMLHttpRequest();
            oReq.onload = reqListener;
            oReq.onerror = reqError;
            oReq.onprogress = function (pe) {
                if (pe.lengthComputable) {
                    Doctum.doctumSearchAutoCompleteProgressBarPercent = parseInt(pe.loaded / pe.total * 100, 10);
                    Doctum.makeProgess();
                }
            };
            oReq.onloadend = function (_) {
                Doctum.markProgressFinished();
            };
            oReq.open('get', Doctum.autoCompleteDataUrl, true);
            oReq.send();
        });
    },
    /**
     * Make some progress on a progress bar
     *
     * @param number percentage
     * @param HTMLElement progressBar
     * @return void
     */
    makeProgressOnProgressBar: function(percentage, progressBar) {
        progressBar.className = 'progress-bar';
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute(
            'aria-valuenow', percentage
        );
    },
    searchEngine: function (query, record) {
        if (typeof query !== 'string') {
            return '';
        }
        // replace all (mode = g) spaces and non breaking spaces (\s) by pipes
        // g = global mode to mark also the second word searched
        // i = case insensitive
        // how this function works:
        // First: search if the query has the keywords in sequence
        // Second: replace the keywords by a mark and leave all the text in between non marked
        
        if (record.match(new RegExp('(' + query.replace(/\s/g, ').*(') + ')', 'gi')) === null) {
            return '';// Does not match
        }

        var replacedRecord = record.replace(new RegExp('(' + query.replace(/\s/g, '|') + ')', 'gi'), function (group) {
            return '<mark class="auto-complete-highlight">' + group + '</mark>';
        });

        if (replacedRecord !== record) {
            return replacedRecord;// This should not happen but just in case there was no match done
        }

        return '';
    },
    /**
     * Clean the search query
     *
     * @param string|null query
     * @return string
     */
    cleanSearchQuery: function (query) {
        if (typeof query !== 'string') {
            return '';
        }
        // replace any chars that could lead to injecting code in our regex
        // remove start or end spaces
        // replace backslashes by an escaped version, use case in search: \myRootFunction
        return query.replace(Doctum.querySearchSecurityRegex, '').trim().replace(/\\/g, '\\\\');
    },
    bootAutoComplete: function () {
        Doctum.autoCompleteJS = new autoComplete(
            {
                selector: '#doctum-search-auto-complete',
                searchEngine: function (query, record) {
                    return Doctum.searchEngine(query, record);
                },
                submit: true,
                data: {
                    src: function (q) {
                        Doctum.markInProgress();
                        return Doctum.loadAutoCompleteData(q);
                    },
                    keys: ['n'],// Data 'Object' key to be searched
                    cache: false, // Is not compatible with async fetch of data
                },
                query: (input) => {
                    return Doctum.cleanSearchQuery(input);
                },
                trigger: (query) => {
                    return Doctum.cleanSearchQuery(query).length > 0;
                },
                resultsList: {
                    tag: 'ul',
                    class: 'auto-complete-dropdown-menu',
                    destination: '#auto-complete-results',
                    position: 'afterbegin',
                    maxResults: 500,
                    noResults: false,
                },
                resultItem: {
                    tag: 'li',
                    class: 'auto-complete-result',
                    highlight: 'auto-complete-highlight',
                    selected: 'auto-complete-selected'
                },
            }
        );
    }
};


document.addEventListener('DOMContentLoaded', Doctum.pagePartiallyLoaded, false);
window.addEventListener('load', Doctum.pageFullyLoaded, false);
