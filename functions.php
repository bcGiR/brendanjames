<?php

register_sidebar(array(
    'name' => __('Right Sidebar'),
    'id' => 'right-sidebar',
    'description' => 'The right sidebar',
    'before_widget' => '<div>',
    'after_widget' => '</div>'
));
register_sidebar(array(
    'name' => __('Left Sidebar'),
    'id' => 'left-sidebar',
    'description' => 'The left sidebar',
    'before_widget' => '<div>',
    'after_widget' => '</div>'
));
