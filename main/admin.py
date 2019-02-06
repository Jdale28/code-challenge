from django.contrib import admin
from main.models import Codelines, Snippets

admin.site.register([Codelines, Snippets])