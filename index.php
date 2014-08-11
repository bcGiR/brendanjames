<?php get_header()?>

    <?php while(have_posts()): the_post()?>

        <h2><a href="<?php the_permalink()?>"><?php the_title()?></a></h2>
        <?php the_date('Y-m-d', '<h3>', '</h3>');?>
        <?php the_content(__('Continue Reading'));?>

    <?php endwhile;?>

<?php get_footer()?>
