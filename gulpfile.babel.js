'use strict';

import gulp from 'gulp';
import browserify from 'browserify'; // 前端模块化方案
import babelify from 'babelify'; // 用于解析JSX语法
import source from 'vinyl-source-stream'; // 可以同时使用 gulp 和 browserify
import sass from 'gulp-sass'; // 编译Sass
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';

const server = browserSync.create();
const sourcePath = {
    script: ['source/react/**'],
    css:['source/sass/**']
}
const buildPath = {
    script: 'build/script',
    css: 'build/css'
}

// 编译Sass
gulp.task('sass', () => {
    return gulp.src(sourcePath.css)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(buildPath.css));
});

// 编译React
gulp.task('browserify', () => {
    return browserify('./source/react/app.js')
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('miaow.js'))
        .pipe(gulp.dest(buildPath.script));
});

// Static server
gulp.task('browser-sync', () => {
    server.init({
        server: {
            baseDir: './build/'
        }
    });

    gulp.watch(sourcePath.css, ['sass']);
    gulp.watch(sourcePath.script, ['browserify']);
    gulp.watch("./build/**").on('change', server.reload);

});

gulp.task('default', ['sass','browserify','browser-sync']);
