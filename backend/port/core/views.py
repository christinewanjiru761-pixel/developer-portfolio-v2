from django.shortcuts import render
from rest_framework import generics
from .models import Projects,Feedback
from .serializers import FeedbackSerializer,ProjectSerializer
from rest_framework.permissions import SAFE_METHODS, AllowAny
from django_filters.rest_framework import DjangoFilterBackend


class ProjectList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name']


class FeedbackList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['first_name','last_name']

# Create your views here.
