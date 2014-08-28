<?php get_header()?>
<?php get_sidebar('left')?>
<div id="buffer"></div>
<div id="content">

    <?php while(have_posts()): the_post()?>

        <h2><?php the_title()?></h2>
        <?php the_date('F j, Y', '<h3>', '</h3>');?>
        <?php the_content(__('Continue Reading'));?>

    <?php endwhile;?>
    <?php comments_template('', true);?>

<?php get_footer()?>
