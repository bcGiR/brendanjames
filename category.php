<?php get_header()?>
<?php get_sidebar('left')?>
<div id="content">

    <?php while(have_posts()): the_post()?>

        <h2><a href="<?php the_permalink()?>"><?php the_title()?></a></h2>
        <?php the_date('F j, Y', '<h3>', '</h3>');?>
        <?php the_content(__('Continue Reading'));?>

    <?php endwhile;?>

<?php get_footer()?>
