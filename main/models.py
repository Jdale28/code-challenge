from django.db import models

class Codelines(models.Model):
    name = models.CharField(max_length=255)

class Snippets(models.Model):
    snippet = models.CharField(max_length=255)
    codelines = models.ForeignKey(Codelines, on_delete=models.CASCADE, related_name='codelines')