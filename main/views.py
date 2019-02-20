from django.shortcuts import render

from rest_framework import viewsets

from .serializers import CodelinesSerializer, SnippetsSerializer
from .models import Codelines, Snippets


class CodelinesView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Codelines.objects.all()
    serializer_class = CodelinesSerializer

class SnippetsView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Snippets.objects.all()
    serializer_class = SnippetsSerializer