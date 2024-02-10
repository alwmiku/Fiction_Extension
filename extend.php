<?php

/*
 * This file is part of flarum/fictionextension.
 *
 * Copyright (c) 2024 clili.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Flarum\FictionExtension;

use Flarum\Extend;
use Ficiton\Extesion\Controller;
use Ficiton\Extesion\Controller\BookHomePages;
use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface as Request;

return [

    (new Extend\Frontend('forum'))
    ->route('/Fiction/homepage','flarum.Fiction_Extension.forntPages',function (Document $document,Request $request)
        {
            $document->title = 'BooksHome';
        }),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    // (new Extend\Routes ('forum'))
    // ->get('/Fiction/homepage',"flarum.Fiction_Extension",BookHomePages::class),

];