# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2019-07-01 06:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DFJJ', '0011_auto_20190630_2344'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='bank',
            field=models.CharField(default='', max_length=128, verbose_name='银行'),
        ),
        migrations.AddField(
            model_name='user',
            name='bank_acount',
            field=models.CharField(default='', max_length=256, verbose_name='卡号'),
        ),
        migrations.AddField(
            model_name='user',
            name='bank_details',
            field=models.CharField(default='', max_length=256, verbose_name='开户行'),
        ),
    ]