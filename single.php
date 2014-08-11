<?php get_header()?>

    <?php while(have_posts()): the_post()?>

        <h2><?php the_title()?></h2>
        <?php the_date('Y-m-d', '<h3>', '</h3>');?>
        <?php the_content(__('Continue Reading'));?>

    <?php endwhile;?>
    <?php comments_template('', true);?>

<?php get_footer()?>
