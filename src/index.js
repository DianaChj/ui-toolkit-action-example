/**
 * Copyright 2022 by Avid Technology, Inc.
 */

import appConfig from './package.json';

import ViewConfig from './avid_api/view/ViewConfig';
import AppEntry from './avid_api/entry/EntryConfig';
import Action from './app/action';
import Binding from './app/binding';

const isAdminApp = appConfig.avid.hasOwnProperty('mode') && appConfig.avid.mode[0] === 'admin';
const providing = isAdminApp ? 'adminApps' : 'apps';

export const avid = [
    {
        name: `${appConfig.identity.appName}-view`,
        provides: ['appViews'],
        create: () => ViewConfig,
    },
    {
        name: `${appConfig.identity.appName}-default-theme`,
        provides: ['theme'],
        create: () => ({
            key: 'dark',
            css: './style.css',
        }),
    },
    {
        name: appConfig.identity.appName,
        provides: [providing],
        create: () => AppEntry,
    },
    {
        name: Action.id,
        provides: ['actions'],
        create: () => Action,
    },
    {
        name: Action.id,
        provides: ['actionBindings'],
        create: () => Binding,
    },
];
