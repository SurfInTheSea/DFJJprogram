# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2019-07-01 07:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DFJJ', '0013_user_realname'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='pay_name',
            field=models.CharField(default='', max_length=128, verbose_name='利息账户'),
        ),
    ]
