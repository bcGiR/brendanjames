<?php get_header()?>
<div id="content">

    <?php while(have_posts()): the_post()?>

        <h2><?php the_title()?></h2>
        <?php the_content(__('Continue Reading'));?>

    <?php endwhile;?>

<?php get_footer()?>
