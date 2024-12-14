<?php
return [

    'paths' => ['api/*'],  // Cette ligne spécifie que CORS s'applique aux routes API.

    'allowed_methods' => ['*'],  // Permet toutes les méthodes HTTP : GET, POST, PUT, DELETE, etc.

    'allowed_origins' => ['*'],  // Permet toutes les origines. Changez cette valeur pour plus de sécurité.

    'allowed_headers' => ['*'],  // Permet tous les en-têtes. Changez également cela pour plus de sécurité.

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
