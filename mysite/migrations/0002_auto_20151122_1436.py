# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='storecomment',
            name='updated',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2015, 11, 22, 14, 36, 27, 570289)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='lists',
            name='user',
            field=models.ForeignKey(to='mysite.Users'),
        ),
    ]
