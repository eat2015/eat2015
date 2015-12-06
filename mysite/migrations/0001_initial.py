# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListDislike',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
            ],
        ),
        migrations.CreateModel(
            name='ListLike',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
            ],
        ),
        migrations.CreateModel(
            name='Lists',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=32)),
                ('description', models.TextField(null=True, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='StoreComment',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('description', models.TextField()),
                ('good', models.IntegerField(null=True, blank=True)),
                ('bad', models.IntegerField(null=True, blank=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='StoreDislike',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
            ],
        ),
        migrations.CreateModel(
            name='StoreLike',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
            ],
        ),
        migrations.CreateModel(
            name='Stores',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=32)),
                ('good', models.IntegerField(null=True, blank=True)),
                ('bad', models.IntegerField(null=True, blank=True)),
                ('description', models.TextField(null=True, blank=True)),
                ('location', models.TextField(null=True, blank=True)),
                ('fan_page', models.URLField(null=True, blank=True)),
                ('website', models.URLField(null=True, blank=True)),
            ],
            options={
                'ordering': ['good'],
            },
        ),
        migrations.CreateModel(
            name='Tags',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=32)),
                ('description', models.TextField()),
                ('list', models.ManyToManyField(to='mysite.Lists')),
                ('store', models.ManyToManyField(to='mysite.Stores')),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('username', models.CharField(max_length=32)),
                ('password', models.CharField(max_length=32)),
                ('email', models.EmailField(max_length=254)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['created'],
            },
        ),
        migrations.AddField(
            model_name='storelike',
            name='store',
            field=models.ForeignKey(to='mysite.Stores'),
        ),
        migrations.AddField(
            model_name='storelike',
            name='user',
            field=models.OneToOneField(to='mysite.Users'),
        ),
        migrations.AddField(
            model_name='storedislike',
            name='store',
            field=models.ForeignKey(to='mysite.Stores'),
        ),
        migrations.AddField(
            model_name='storedislike',
            name='user',
            field=models.OneToOneField(to='mysite.Users'),
        ),
        migrations.AddField(
            model_name='storecomment',
            name='store',
            field=models.ForeignKey(to='mysite.Stores'),
        ),
        migrations.AddField(
            model_name='storecomment',
            name='user',
            field=models.ForeignKey(to='mysite.Users'),
        ),
        migrations.AddField(
            model_name='lists',
            name='store',
            field=models.ManyToManyField(to='mysite.Stores'),
        ),
        migrations.AddField(
            model_name='lists',
            name='user',
            field=models.OneToOneField(to='mysite.Users'),
        ),
        migrations.AddField(
            model_name='listlike',
            name='list',
            field=models.ForeignKey(to='mysite.Lists'),
        ),
        migrations.AddField(
            model_name='listlike',
            name='user',
            field=models.OneToOneField(to='mysite.Users'),
        ),
        migrations.AddField(
            model_name='listdislike',
            name='list',
            field=models.ForeignKey(to='mysite.Lists'),
        ),
        migrations.AddField(
            model_name='listdislike',
            name='user',
            field=models.OneToOneField(to='mysite.Users'),
        ),
    ]
