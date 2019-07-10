# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2019-06-30 15:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DFJJ', '0009_delete_operatinginfo'),
    ]

    operations = [
        migrations.CreateModel(
            name='OperatingInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=128, null=True, verbose_name='用户名')),
                ('money', models.FloatField(blank=True, default=0, null=True, verbose_name='变动之前余额')),
                ('program_name', models.CharField(blank=True, max_length=128, null=True, verbose_name='项目名称')),
                ('program_minPay', models.IntegerField(blank=True, null=True, verbose_name='最小买入值')),
                ('program_payBack', models.FloatField(blank=True, null=True, verbose_name='利率%')),
                ('program_count', models.IntegerField(blank=True, null=True, verbose_name='买入数量')),
                ('mone_done', models.FloatField(blank=True, default=0, null=True, verbose_name='变动之后余额')),
                ('c_time', models.DateTimeField(auto_now=True, null=True, verbose_name='发生时间')),
                ('out_time', models.DateTimeField(auto_now_add=True, null=True, verbose_name='获得利息时间')),
            ],
            options={
                'verbose_name': '变更记录',
                'verbose_name_plural': '变更记录',
                'ordering': ['c_time'],
            },
        ),
    ]
