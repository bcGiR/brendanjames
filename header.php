<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Personal website of Brendan James Crawford, Student and Software Developer">
    <title><?php bloginfo('title')?></title>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url')?>" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://www.brendanjames.ca/wp-content/themes/brendanjames/scripts.js"></script>

    <?php wp_head()?>
</head>

<header>
<h1><a href="<?php echo home_url('/')?>"><?php bloginfo('name')?></a></h1>
</header>

<div id="nav-anchor"></div>
<nav>
<div id="nav">
    <?php wp_nav_menu();?>
</div>
</nav>

<div id="container">
<div id="sidebar-wrapper">
<?php get_sidebar()?>
